"use client";
import { addData, getData } from "@/firebase/firestoreService";
import { useEffect, useState } from "react";

function PopupModel() {
  const [isOpen, setIsOpen] = useState(false);
  const [srcVideo, setSrcVideo] = useState("");
  const [srcPic, setSrcPic] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData("products");
      setValue(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between w-full p-[30px]">
        <p className="text-[18px] font-semibold">Products</p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          Add New
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-xl max-w-md w-full flex flex-col gap-[10px]">
            <h2 className="text-xl font-semibold mb-2">New Data</h2>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Pic Link " onChange={(e) => setSrcPic(e.target.value)} />
            <input placeholder="Video Link" onChange={(e) => setSrcVideo(e.target.value)} />
            <div className="flex flex-row gap-[15px]">
              <button onClick={() => addData("products", { name, srcPic, srcVideo })} className="mt-4 px-4 py-2 bg-white text-black rounded cursor-pointer">Add</button>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="flex flex-col gap-[8px] bg-accent rounded-[7px] p-[8px]">
            <p>Name: {val.name}</p>
            <p>Source Picture: {val.srcPic}</p>
            <p>Source Video: {val.srcVideo}</p>
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
  const [improvement_1, setImprovement_1] = useState([]);
  const [improvement_2, setImprovement_2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData("casestudies");
      setValue(data);
    }
    fetchData();
  }, []);

  const changeGithubURL = (url) => {
    if (!url.includes("github.com") || !url.includes("/blob/")) {
      throw new Error("Invalid Link!");
    }

    let rawurl = url.replace(typeof url !== "string" ||"https://github.com", "https://raw.githubusercontent.com");
    rawurl = rawurl.replace("/blob", "");

    addData("casestudies", { title, description, rawurl, improvement_1, improvement_2 });
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full p-[30px]">
        <p className="text-[18px] font-semibold">Case Studies</p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-black text-white rounded cursor-pointer"
        >
          Add New
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-xl max-w-md w-full flex flex-col gap-[10px]">
            <h2 className="text-xl font-semibold mb-2">New Data</h2>
            <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input placeholder="Image Link" onChange={(e) => setImage(e.target.value)} />
            <input placeholder="Improvement 1" onChange={(e) => setImprovement_1(e.target.value)} />
            <input placeholder="Improvement 2" onChange={(e) => setImprovement_2(e.target.value)} />
            <div className="flex flex-row gap-[15px]">
              <button onClick={() => addData("casestudies", { title, description, image, improvement_1, improvement_2 })} className="mt-4 px-4 py-2 bg-white text-black rounded cursor-pointer">Add</button>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="flex flex-col gap-[8px] bg-accent rounded-[7px] p-[8px]">
            <p>Title: {val.title}</p>
            <p>Description: {val.description}</p>
            <p>Source Image: {val.image}</p>
            <p>Improvement 1: {val.improvement_1}</p>
            <p>Improvement 2: {val.improvement_2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function GetEmail() {

  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getData("contacts");
      setValue(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between w-full p-[30px]">
        <p className="text-[18px] font-semibold">Contact Request</p>
      </div>
      <div className="flex flex-col gap-[15px] p-[30px]">
        {Array.isArray(value) && value.map((val, index) => (
          <div key={index} className="flex flex-col gap-[8px] bg-accent rounded-[7px] p-[8px] overflow-y-auto">
            <p>Name: {val.name}</p>
            <p>Org Name: {val.orgName}</p>
            <p>Email ID: {val.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default function Main() {

  const [page, setPage] = useState();

  return (
    <div className="flex flex-row">
      <div className="h-screen w-[300px] bg-accent p-[40px] gap-[15px]">
        <p onClick={() => setPage(<PopupModel />)} className="cursor-pointer hover:bg-white px-[5px] py-[7px] rounded-[4px]">Products</p>
        <p onClick={() => setPage(<CasestudiesData />)} className="cursor-pointer hover:bg-white px-[5px] py-[7px] rounded-[4px]">Case Studies</p>
        <p onClick={() => setPage(<GetEmail />)} className="cursor-pointer hover:bg-white px-[5px] py-[7px] rounded-[4px]">Contact Request</p>
      </div>
      <div className="w-full">
        {page}
      </div>
    </div>
  );
};
