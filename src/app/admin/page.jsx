"use client";
import { addData, deleteData, getData } from "@/firebase/firestoreService";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Plus, Trash2, X } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { deleteDoc } from "firebase/firestore";
import truncateByWords from "@/utils/truncateByWords";

function PopupModel() {
  const [isOpen, setIsOpen] = useState(false);
  const [srcVideo, setSrcVideo] = useState("");
  const [srcPic, setSrcPic] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const data = await getData("products");
        setValue(data);
      }
      fetchData();
    }, 100);
  }, []);

  return (
    <div className="transition-all duration-300">
      <div className="flex items-center justify-between my-[30px] mx-[10px] p-[10px] bg-gray-200 rounded-[7px]">
        <p className="text-[18px] font-semibold">Products</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
        >
          Add New <Plus />
        </motion.button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-xl max-w-md w-full flex flex-col gap-[15px] outline-1">
            <h2 className="text-xl font-semibold mb-2">Post</h2>
            <div className="flex flex-col gap-[5px]">
              <p>Name <span className="text-red-500">*</span></p>
              <input placeholder="Name" onChange={(e) => setName(e.target.value)} className="border-b-1 outline-none p-[2px]" />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p>Pic Link <span className="text-red-500">*</span></p>
              <input placeholder="Pic Link " onChange={(e) => setSrcPic(e.target.value)} className="border-b-1 outline-none p-[2px]" />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p>Video Link <span className="text-red-500">*</span></p>
              <input placeholder="Video Link" onChange={(e) => setSrcVideo(e.target.value)} className="border-b-1 outline-none p-[2px]" />
            </div>
            <div className="flex flex-row gap-[15px]">
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (!name || !srcPic || !srcVideo) {
                    toast.info("Enter all the fields!");
                  } else {
                    addData("products", { name, srcPic, srcVideo });
                    setIsOpen(false);
                    toast.success("Data added successfully!");
                  }
                }} className="mt-4 px-4 py-2 bg-white text-black rounded cursor-pointer outline-1">Add</motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
              >
                Close <X />
              </motion.button>
            </div>
          </div>
          <Toaster richColors />
        </div>
      )}

      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="flex items-center justify-between bg-accent rounded-[7px] p-[8px]">
            <div className="flex flex-col gap-[8px]">
              <p>Name: {val.name}</p>
              <p>Source Picture: {val.srcPic}</p>
              <p>Source Video: {val.srcVideo}</p>
            </div>
            <motion.div whileTap={{ scale: 0.70 }}
              onClick={() => {
                if (deleteData("products", val.id)) {
                  toast.success("Data deleted successfully!");
                }
              }} className="mr-[25px] text-red-600 cursor-pointer hover:bg-red-200 p-[5px] rounded-[2px] transition-all duration-200">
              <Trash2 />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

function CasestudiesData() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [improvement_1, setImprovement_1] = useState("");
  const [improvement_2, setImprovement_2] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const data = await getData("casestudies");
        setValue(data);
      }
      fetchData();
    }, 100);
  }, []);

  const changeGithubURL = (url) => {
    if (!url.includes("github.com") || !url.includes("/blob/")) {
      throw new Error("Invalid Link!");
    }

    let rawurl = url.replace(typeof url !== "string" || "https://github.com", "https://raw.githubusercontent.com");
    rawurl = rawurl.replace("/blob", "");

    addData("casestudies", { title, description, rawurl, improvement_1, improvement_2 });
  };

  return (
    <div className="transition-all duration-300">
      <div className="flex items-center justify-between mx-[10px] my-[30px] p-[10px] bg-gray-200 rounded-[7px]">
        <p className="text-[18px] font-semibold">Case Studies</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
        >
          Add New <Plus />
        </motion.button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-xl w-[500px] flex flex-col gap-[20px] outline-1">
            <h2 className="text-xl font-semibold mb-2">Post</h2>
            <div className="flex flex-col gap-[10px]">
              <p>Title <span className="text-red-500">*</span></p>
              <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Description <span className="text-red-500">*</span></p>
              <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Image Link <span className="text-red-500">*</span></p>
              <input placeholder="Image Link" onChange={(e) => setImage(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Improvement 1 <span className="text-red-500">*</span></p>
              <input placeholder="Improvement 1" onChange={(e) => setImprovement_1(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Improvement 2 <span className="text-red-500">*</span></p>
              <input placeholder="Improvement 2" onChange={(e) => setImprovement_2(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-row gap-[15px]">
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (!title || !description || !image || !improvement_1 || !improvement_2) {
                    toast.info("Enter all the fields!");
                  }
                  else {
                    addData("casestudies", { title, description, image, improvement_1, improvement_2 });
                    setIsOpen(false);
                    toast.success("Data added successfully!");
                  }
                }} className="mt-4 px-4 py-2 bg-white text-black rounded cursor-pointer border-1">Add</motion.button>
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
              >
                Close <X />
              </motion.button>
            </div>
          </div>
          <Toaster richColors />
        </div>
      )}

      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="bg-accent rounded-[7px] p-[15px] flex items-center justify-between mr-[15px] max-w-[1150px]">
            <div className="flex flex-col gap-[8px] w-[90%] overflow-hidden text-justify">
              <p>Title:{val.title}</p>
              <p>Description: {val.description}</p>
              <p>Source Image: {val.image}</p>
              <p>Improvement 1: {val.improvement_1}</p>
              <p>Improvement 2: {val.improvement_2}</p>
            </div>
            <motion.div whileTap={{ scale: 0.70 }}
              onClick={() => {
                if (deleteData("casestudies", val.id)) {
                  toast.success("Data deleted successfully!");
                }
              }} className="mr-[25px] text-red-600 cursor-pointer hover:bg-red-200 p-[5px] rounded-[2px] transition-all duration-200">
              <Trash2 />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Healthcare() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [improvement_1, setImprovement_1] = useState("");
  const [improvement_2, setImprovement_2] = useState("");
  const [benefits, setBenefits] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const data = await getData("healthcare");
        setValue(data);
      }
      fetchData();
    }, 100);
  }, []);

  const InputReturn = (nos) => {
    for (let i = 0; i < nos.length; i++) {
      return (<input placeholder={nos} />);
    }
  }

  return (
    <div className="transition-all duration-300">
      <div className="flex items-center justify-between mx-[10px] my-[30px] p-[10px] bg-gray-200 rounded-[7px]">
        <p className="text-[18px] font-semibold">Healthcare</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
        >
          Add New <Plus />
        </motion.button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-xl w-[500px] flex flex-col gap-[20px] outline-1">
            <h2 className="text-xl font-semibold mb-2">Post</h2>
            <div className="flex flex-col gap-[10px]">
              <p>Title <span className="text-red-500">*</span></p>
              <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Description <span className="text-red-500">*</span></p>
              <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Image Link <span className="text-red-500">*</span></p>
              <input placeholder="Image Link" onChange={(e) => setImage(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div>
              <div className="flex flex-row items-center justify-between">
                <p>Key Benefits  <span className="text-red-500">*</span></p>
                <p className="cursor-pointer" onClick={() => setBenefits((val) => (val + 1))}><Plus /></p>
              </div>
              <div>
                  <input />
                  <input />
                  <input />
                  <input />
                  <input />
                  <input />
              </div>
            </div>
            <div className="flex flex-row gap-[15px]">
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (!title || !description || !image || !improvement_1 || !improvement_2) {
                    toast.info("Enter all the fields!");
                  }
                  else {
                    addData("casestudies", { title, description, image, improvement_1, improvement_2 });
                    setIsOpen(false);
                    toast.success("Data added successfully!");
                  }
                }} className="mt-4 px-4 py-2 bg-white text-black rounded cursor-pointer border-1">Add</motion.button>
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
              >
                Close <X />
              </motion.button>
            </div>
          </div>
          <Toaster richColors />
        </div>
      )}

      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="bg-accent rounded-[7px] p-[15px] flex items-center justify-between mr-[15px] max-w-[1150px]">
            <div className="flex flex-col gap-[8px] w-[90%] overflow-hidden text-justify">
              <p>Title:{val.title}</p>
              <p>Description: {val.description}</p>
              <p>Source Image: {val.image}</p>
              <p>Improvement 1: {val.improvement_1}</p>
              <p>Improvement 2: {val.improvement_2}</p>
            </div>
            <motion.div whileTap={{ scale: 0.70 }}
              onClick={() => {
                if (deleteData("casestudies", val.id)) {
                  toast.success("Data deleted successfully!");
                }
              }} className="mr-[25px] text-red-600 cursor-pointer hover:bg-red-200 p-[5px] rounded-[2px] transition-all duration-200">
              <Trash2 />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Ecommerce() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [improvement_1, setImprovement_1] = useState("");
  const [improvement_2, setImprovement_2] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const data = await getData("ecommerce");
        setValue(data);
      }
      fetchData();
    }, 100);
  }, []);

  return (
    <div className="transition-all duration-300">
      <div className="flex items-center justify-between mx-[10px] my-[30px] p-[10px] bg-gray-200 rounded-[7px]">
        <p className="text-[18px] font-semibold">Ecommerce</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
        >
          Add New <Plus />
        </motion.button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-xl w-[500px] flex flex-col gap-[20px] outline-1">
            <h2 className="text-xl font-semibold mb-2">Post</h2>
            <div className="flex flex-col gap-[10px]">
              <p>Title <span className="text-red-500">*</span></p>
              <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Description <span className="text-red-500">*</span></p>
              <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Image Link <span className="text-red-500">*</span></p>
              <input placeholder="Image Link" onChange={(e) => setImage(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Improvement 1 <span className="text-red-500">*</span></p>
              <input placeholder="Improvement 1" onChange={(e) => setImprovement_1(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Improvement 2 <span className="text-red-500">*</span></p>
              <input placeholder="Improvement 2" onChange={(e) => setImprovement_2(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-row gap-[15px]">
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (!title || !description || !image || !improvement_1 || !improvement_2) {
                    toast.info("Enter all the fields!");
                  }
                  else {
                    addData("casestudies", { title, description, image, improvement_1, improvement_2 });
                    setIsOpen(false);
                    toast.success("Data added successfully!");
                  }
                }} className="mt-4 px-4 py-2 bg-white text-black rounded cursor-pointer border-1">Add</motion.button>
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
              >
                Close <X />
              </motion.button>
            </div>
          </div>
          <Toaster richColors />
        </div>
      )}

      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="bg-accent rounded-[7px] p-[15px] flex items-center justify-between mr-[15px] max-w-[1150px]">
            <div className="flex flex-col gap-[8px] w-[90%] overflow-hidden text-justify">
              <p>Title:{val.title}</p>
              <p>Description: {val.description}</p>
              <p>Source Image: {val.image}</p>
              <p>Improvement 1: {val.improvement_1}</p>
              <p>Improvement 2: {val.improvement_2}</p>
            </div>
            <motion.div whileTap={{ scale: 0.70 }}
              onClick={() => {
                if (deleteData("casestudies", val.id)) {
                  toast.success("Data deleted successfully!");
                }
              }} className="mr-[25px] text-red-600 cursor-pointer hover:bg-red-200 p-[5px] rounded-[2px] transition-all duration-200">
              <Trash2 />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Logistics() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [improvement_1, setImprovement_1] = useState("");
  const [improvement_2, setImprovement_2] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const data = await getData("logistics");
        setValue(data);
      }
      fetchData();
    }, 100);
  }, []);

  return (
    <div className="transition-all duration-300">
      <div className="flex items-center justify-between mx-[10px] my-[30px] p-[10px] bg-gray-200 rounded-[7px]">
        <p className="text-[18px] font-semibold">Logistics</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
        >
          Add New <Plus />
        </motion.button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-xl w-[500px] flex flex-col gap-[20px] outline-1">
            <h2 className="text-xl font-semibold mb-2">Post</h2>
            <div className="flex flex-col gap-[10px]">
              <p>Title <span className="text-red-500">*</span></p>
              <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Description <span className="text-red-500">*</span></p>
              <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Image Link <span className="text-red-500">*</span></p>
              <input placeholder="Image Link" onChange={(e) => setImage(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Improvement 1 <span className="text-red-500">*</span></p>
              <input placeholder="Improvement 1" onChange={(e) => setImprovement_1(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p>Improvement 2 <span className="text-red-500">*</span></p>
              <input placeholder="Improvement 2" onChange={(e) => setImprovement_2(e.target.value)} className="outline-none border-b-1" />
            </div>
            <div className="flex flex-row gap-[15px]">
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (!title || !description || !image || !improvement_1 || !improvement_2) {
                    toast.info("Enter all the fields!");
                  }
                  else {
                    addData("casestudies", { title, description, image, improvement_1, improvement_2 });
                    setIsOpen(false);
                    toast.success("Data added successfully!");
                  }
                }} className="mt-4 px-4 py-2 bg-white text-black rounded cursor-pointer border-1">Add</motion.button>
              <motion.button whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer flex items-center justify-between gap-[10px]"
              >
                Close <X />
              </motion.button>
            </div>
          </div>
          <Toaster richColors />
        </div>
      )}

      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="bg-accent rounded-[7px] p-[15px] flex items-center justify-between mr-[15px] max-w-[1150px]">
            <div className="flex flex-col gap-[8px] w-[90%] overflow-hidden text-justify">
              <p>Title:{val.title}</p>
              <p>Description: {val.description}</p>
              <p>Source Image: {val.image}</p>
              <p>Improvement 1: {val.improvement_1}</p>
              <p>Improvement 2: {val.improvement_2}</p>
            </div>
            <motion.div whileTap={{ scale: 0.70 }}
              onClick={() => {
                if (deleteData("casestudies", val.id)) {
                  toast.success("Data deleted successfully!");
                }
              }} className="mr-[25px] text-red-600 cursor-pointer hover:bg-red-200 p-[5px] rounded-[2px] transition-all duration-200">
              <Trash2 />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

function GetEmail() {

  const [value, setValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const data = await getData("contacts");
        setValue(data);
      }
      fetchData();
    }, 100);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mx-[10px] my-[30px] p-[10px] bg-gray-200 rounded-[5px] py-[16px]">
        <p className="text-[18px] font-semibold">Contact Request</p>
      </div>
      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="flex items-center justify-between mr-[15px] bg-accent rounded-[7px] p-[8px] overflow-y-auto">
            <div className="flex flex-col gap-[8px]">
              <p>Name: {val.name}</p>
              <p>Org Name: {val.orgName}</p>
              <p>Contact No: {val.cno}</p>
              <p>Email ID: {val.email}</p>
            </div>
            <motion.div whileTap={{ scale: 0.70 }}
              onClick={() => {
                if (deleteData("contacts", val.id)) {
                  toast.success("Data deleted successfully!");
                }
              }} className="mr-[25px] text-red-600 cursor-pointer hover:bg-red-200 p-[5px] rounded-[2px] transition-all duration-200">
              <Trash2 />
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

function Main() {

  const [page, setPage] = useState();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-row transition-all duration-300">
      <div className="h-screen w-[300px] bg-gray-200 p-[40px] gap-[15px]">
        <motion.p whileTap={{ scale: 0.95 }} id="admin-01" onClick={() => { setClicked((pre) => (!pre)); document.getElementById("admin-01").style.backgroundColor = "white"; document.getElementById("admin-02").style.backgroundColor = ""; document.getElementById("admin-03").style.backgroundColor = ""; }} className="cursor-pointer hover:bg-accent px-[5px] py-[7px] rounded-[4px] flex flex-row items-center justify-between">Products {!clicked ? <ChevronDown /> : <ChevronUp />}</motion.p>
        {clicked &&
          <div className="flex flex-col gap-[10px] ml-[15px] my-[10px]">
            <motion.p whileTap={{ scale: 0.95 }} onClick={() => setPage(<Healthcare />)} className="cursor-pointer hover:bg-accent px-[5px] py-[7px] rounded-[4px]">Healthcare</motion.p>
            <motion.p whileTap={{ scale: 0.95 }} onClick={() => setPage(<Ecommerce />)} className="cursor-pointer hover:bg-accent px-[5px] py-[7px] rounded-[4px]">Ecommerce</motion.p>
            <motion.p whileTap={{ scale: 0.95 }} onClick={() => setPage(<Logistics />)} className="cursor-pointer hover:bg-accent px-[5px] py-[7px] rounded-[4px]">Logistics</motion.p>
          </div>
        }
        <motion.p whileTap={{ scale: 0.95 }} id="admin-02" onClick={() => { setPage(<CasestudiesData />); document.getElementById("admin-01").style.backgroundColor = ""; document.getElementById("admin-02").style.backgroundColor = "white"; document.getElementById("admin-03").style.backgroundColor = ""; }} className="cursor-pointer hover:bg-accent px-[5px] py-[7px] rounded-[4px]">Case Studies</motion.p>
        <motion.p whileTap={{ scale: 0.95 }} id="admin-03" onClick={() => { setPage(<GetEmail />); document.getElementById("admin-01").style.backgroundColor = ""; document.getElementById("admin-02").style.backgroundColor = ""; document.getElementById("admin-03").style.backgroundColor = "white"; }} className="cursor-pointer hover:bg-accent px-[5px] py-[7px] rounded-[4px]">Contact Request</motion.p>
      </div>
      <div className="w-full">
        {page}
      </div>
      <Toaster richColors />
    </div>
  );
};

export default function Core() {

  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const realName = "manshree";
  const realPassword = "15manshree15";

  return (
    <>{isOpen ?
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col gap-[25px] p-[35px] w-[400px] outline-1 shadow-2xl rounded-[7px]">
          <p className="text-[18px] font-semibold">Authentication</p>
          <div className="flex flex-col gap-[10px]">
            <p>Username <span className="text-red-500">*</span></p>
            <input placeholder="Username" onChange={(e) => setName(e.target.value)} className="outline-none border-b-2" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p>Password <span className="text-red-500">*</span></p>
            <input placeholder="Password" onChange={(e) => setPw(e.target.value)} className="outline-none border-b-2" />
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!name || !pw) {
                toast.info("Enter all the fields!");
              } else {
                if (name == realName && pw == realPassword) {
                  toast.success("Successfully Authenticated!");
                  setIsOpen(false);
                }
                else {
                  toast.info("Enter correct credentials!");
                }
              }
            }}
            className="text-white bg-black w-fit px-[25px] py-[8px] rounded-[7px] cursor-pointer">Verify</motion.button>
        </div>
      </div>
      :
      <>
        <Main />
      </>
    }
      <Toaster richColors />
    </>
  );
};