import {FaReact,FaNode,FaCss3Alt,FaFigma} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import ImageGenerator from '../assets/ImageGenerator.png'
import Resume from '../assets/Resume.png'
import License from '../assets/License.jpg'
import TODO from '../assets/TODO.png'
export const Skills =[
    {
        id:0,
        tech:'React Js',
        icon: <FaReact/>
    },
    {
        id:1,
        tech:'Node Js',
        icon: <FaNode/>
    },{
        id:2,
        tech:'CSS',
        icon: <FaCss3Alt />
    },{
        id:3,
        tech:'Javascript',
        icon: <SiJavascript/>
    },{
        id:4,
        tech:'Github',
        icon : <BsGithub />
    },{
        id:5,
        tech:'Figma',
        icon: <FaFigma />
    }
]
    
export const projects =[
    {
        id:0,
        name:'AI Image Genearator App',
        desc:'Built on Dall-e model provided by OpenAI, I have created an ai image generator app by which you can generate high quality ai images for and view the images generated by community.',
        tech:['ReactJs','MongoDB','NodeJS','TailwindCss'],
        url:'https://picaii.onrender.com',
        github:'https://github.com/sijju/ImageGenerator',
        img: ImageGenerator,
        reverse:false
    },{
        id:1,
        name:'Resume Analyser',
        desc:'Created a AI Resume Analyser app by using NLP models and streamlit as a frontend, through which you can get analysis of your resume.App recommends skills and courses related to the parsed info available in the resume.This is the version1 of the website, currently Implementing Resume Matcher in the same webapp where you can give job description,resume and check the resume score.',
        tech:['Python','DS','NLP','Streamlit'],
        url:'https://smartresume.streamlit.app/',
        github:'https://github.com/sijju/Resume_Analyzer',
        img: Resume,
        reverse:true
        
    },{
        id:2,
        name:'License Plate Detection App',
        desc:'I created this project as a part of my major project work,where I built the frontend of the app using the React Native.The purpose of this project is to implement a ANPR level license plate detector through phone instead of still cameras.So we created this project using YOLO as a model since it is fast and reliable.We got 92% precision rate',
        tech:['Python','ML','YOLO','React Native'],
        github:'https://github.com/sijju/LICENSE-PLATE',
        img : License,
        reverse:false
    },{
        id:3,
        name:'Todo App',
        desc:'Created a Basic TODO App through which you can perform CRUD operation on your TODO list.This is my first project working on Django and React stack and using DjangoRestFramework for creating API endpoints.',
        tech:['ReactJS','Django','DjangoRestFramework'],
        url:'https://karthiksijju.pythonanywhere.com/#/',
        github:'https://github.com/sijju/TODO',
        img : TODO,
        reverse:true
    },
]

export const navLinks = [
    {
        id:0,
        name:'Home',
        href:'Home'
    },{
        id:1,
        name:'My SKills',
        href:'Skills'
    },{
        id:2,
        name:'My Projects',
        href:'Projects'
    },{
        id:3,
        name:'Contact',
        href:'Contact'
    }
]