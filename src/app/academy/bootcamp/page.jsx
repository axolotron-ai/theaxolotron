"use client";
import Clients from "@/components/academy/Clients";
import ClientsB from "@/components/academy/ClientsB";
import Footer from "@/components/Footer";
import MotionButton from "@/components/MotionButton";
import { oswald } from "@/utils/fonts";
import { motion } from "framer-motion";
import Image from "next/image";

export default function page() {
    return (
        <>
            <div className="bg-[#151515] min-h-screen px-[calc(10%)] py-[calc(5%)]">
                <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 mb-[40px]">
                    <div>
                        <p className={`${oswald.className} text-[clamp(1.5rem,2.5vw,3rem)] font-semibold text-white`}>AI BOOTCAMP (5DAYS)</p>
                        <p className="text-[clamp(1.1rem,1.5vw,2rem)] text-white pb-[50px]">The Axolotron AI Bootcamp is an intensive 5-day, 25-hour hands-on program that transformsbeginners into industry-ready AI builders. LearnPython, data handling, machine learning, deeplearning, and Git — all while building realprojects. No theory, just execution. Leave withconfidence, a portfolio, and skills to join real AIteams.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/bootcamp.jpg" alt="/reload" height={350} width={350} quality={100} className="h-[350px] w-[350px] object-cover rounded-[7px]" />
                    </div>
                </div>

                <div className="flex flex-col text-white">
                    <div className="grid grid-cols-2">
                        <p className="outline-1 outline-white/50 p-[10px] text-[20px] font-semibold h-full flex items-center">03What You Learn (Day-by-DayBreakdown)</p>
                        <div className="outline-1 outline-white/50 p-[10px] flex flex-col gap-[14px] text-[18px] text-white">
                            <div>
                                <p>Day 1: AI Mindset + Git Setup + Python for AI</p>
                                <p>Hours 1-2: AI in the real world: how it powers business, not just sci-fi</p>
                                <p>Git & GitHub crash course (init, commit, push, clone, branches)</p>
                                <p>Hours 3-5: Python essentials for AI: logic, control flow, lists, functions</p>
                                <p>Mini Project: Build an AI-powered number guessing game</p>
                                <p>GitHub push + walkthrough on teamwork habits</p>
                                <p>Outcome: Dev-ready setup + Python + Git confidence</p>
                            </div>

                            <div className="mt-[20px]">
                                <p>Day 2: Data Like a Real AI Engineer</p>
                                <p>Hours 1-2: What is data in AI: structured vs unstructured</p>
                                <p>NumPy deep dive (arrays, ops, slicing)</p>
                                <p>Hours 3-5: Pandas mastery: filtering, groupby, merging</p>
                                <p>EDA (Exploratory Data Analysis) challenge</p>
                                <p>Mini Project: Sales trend analyzer (with graphs)</p>
                                <p>Outcome: Can clean & analyze real datasets</p>
                            </div>

                            <div className="mt-[20px]">
                                <p>Day 3: Machine Learning That Actually Works</p>
                                <p>Hours 1-2: ML mindset: supervised learning + use cases</p>
                                <p>scikit-learn: regression/classification</p>
                                <p>Model training + testing workflow</p>
                                <p>Hours 3-5: Evaluation metrics: accuracy, precision, recall</p>
                                <p>Project: Predict diabetes / customer churn</p>
                                <p>Version control: push working model to GitHub</p>
                                <p>Outcome: Fully trained ML model + team-reviewed code</p>
                            </div>

                            <div className="mt-[20px]">
                                <p>Day 4: Deep Learning That Delivers</p>
                                <p>Hours 1-2: What is a neural net (visual breakdown, intuition)</p>
                                <p>Keras/TensorFlow intro (hands-on)</p>
                                <p>Hours 3-5: CNNs for image classification</p>
                                <p>Train your own digit/disease/image recognizer</p>
                                <p>Push to GitHub + peer review</p>
                                <p>Outcome: Can build and explain a DL model confidently</p>
                            </div>

                            <div className="mt-[20px]">
                                <p>Day 5: Industry Tools + Final Project Build</p>
                                <p>Hours 1-2: AI tools: ChatGPT, Prompt Engineering</p>
                                <p>Bonus: Business AI use cases + automation demos</p>
                                <p>Hours 3-5: Final Project: Build in pairs (healthcare, e-com, etc.)</p>
                                <p>Presentation prep: pitch + walkthrough</p>
                                <p>GitHub cleanup + career roadmap Q&A</p>
                                <p>Outcome: Capstone project, Portfolio-ready repo, Interview-ready clarity</p>
                            </div>

                            <div className="mt-[20px]">
                                <p>Day 4: Streamlit UI + Docker Packaging</p>
                                <p>Outcome: You turn your AI model into a working app and container</p>
                                <p>Build an interactive app using Streamlit</p>
                                <p>Add input widgets, model inference, and error handling</p>
                                <p>Write Dockerfile, build image, run container</p>
                                <p>Lab: Run your app in Docker, push Dockerfile + UI to GitHub with screenshots</p>
                            </div>

                            <div className="mt-[20px]">
                                <p>Day 5: Capstone + Demo + Portfolio Build</p>
                                <p>Outcome: You finish a production-grade AI project, present it, and walk out with a portfolio</p>
                                <p>Choose: Fake News Detector, Resume Parser, etc.</p>
                                <p>Apply all skills: Python, ML, Git, UI, Docker</p>
                                <p>Polish GitHub repo: GIF/video demo, README, /docs</p>
                                <p>Live Demo Day: Present your project to peers & mentors</p>
                                <p>Career tips + next steps</p>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-2 text-white">
                        <p className="outline-1 outline-white/50 p-[10px] text-[20px] font-semibold h-full flex items-center">Bootcamp Outcomes</p>
                        <div className="outline-1 outline-white/50 p-[10px] flex flex-col gap-[14px] text-[18px] text-white">
                            <p>Set up a full AI dev environment with Git, VS Code, and Python</p>
                            <p>Build and train multiple ML models using real datasets</p>
                            <p>Create and push projects to GitHub with clean commit history</p>
                            <p>Design and launch an AI web app using Streamlit</p>
                            <p>Package projects in Docker for real-world deployment</p>
                            <p>Complete a capstone project ready for portfolios or internships</p>
                            <p>Receive a certificate + live demo exposure</p>
                            <p>Walk away with a real GitHub portfolio that proves their skills</p>
                        </div>
                    </div>
                </div>

                <div className="py-[calc(4%)] flex items-center justify-end">
                    <motion.button whileTap={{ scale: 0.95 }} className="px-[30px] py-[15px] bg-white text-black font-semibold rounded-[7px] cursor-pointer">Enquiry</motion.button>
                </div>
            </div>
            <ClientsB />
            <Footer />
        </>
    )
};
