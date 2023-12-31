import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import ConfettiExplosion from 'react-confetti-explosion';
import Timer from './timer';

const DB = [{
    "link": "https://www.youtube.com/embed/-W3xNjeIo8k?autoplay=1&enablejsapi=1&start=500&rel=0&controls=0&loop=1",
    "options": ["Tangier", "Al sawira", "Agadir", "Asilah"],
    "correct_option": 2
},
{
    "link": "https://www.youtube.com/embed/Z81f5gnIa5g?autoplay=1&enablejsapi=1&start=200&rel=0&controls=0&loop=1",
    "options": ["Fes", "Marrakech", "Salé", "Rabat"],
    "correct_option": 0
},
{
    "link": "https://www.youtube.com/embed/aysbEtOUoWo?autoplay=1&enablejsapi=1&start=500&rel=0&controls=0&loop=1",
    "options": ["Casablanca", "Marrakech", "Tangier", "Rabat"],
    "correct_option": 3
}
    ,
{
    "link": "https://www.youtube.com/embed/3ZZ1bPZ9DfE?autoplay=1&enablejsapi=1&start=200&rel=0&controls=0&loop=1",
    "options": ["Rabat", "Casablanca", "Tangier", "Mohammedia"],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/l5Ef-b7fDuU?autoplay=1&enablejsapi=1&start=50&rel=0&controls=0&loop=1",
    "options": ["Laayoune", "Zagora", "Ouarzazate", "Errachidia "],
    "correct_option": 2
},
{
    "link": "https://www.youtube.com/embed/f6BiA8nXBw4?autoplay=1&enablejsapi=1&start=50&rel=0&controls=0&loop=1",
    "options": ["Kalaat M'Gouna", "Youssoufia", "Zagora", "Errachidia "],
    "correct_option": 3
},
{
    "link": "https://www.youtube.com/embed/BAJyqUFu9_U?autoplay=1&enablejsapi=1&start=200&rel=0&controls=0&loop=1",
    "options": ["Youssoufia", "Tiznit", "Ouarzazate", "Marrakech "],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/ivXDnAFT-P4?autoplay=1&enablejsapi=1&start=100&rel=0&controls=0&loop=1",
    "options": ["Laayoune", "Tan-Tan", "Sefrou", "Agadir "],
    "correct_option": 0
},
{
    "link": "https://www.youtube.com/embed/_xIfiUpY9j0?autoplay=1&enablejsapi=1&start=100&rel=0&controls=0&loop=1",
    "options": ["Al sawira", "Beni Mellal", "Nador", "Marrakech"],
    "correct_option": 2
},
{
    "link": "https://www.youtube.com/embed/Ke6_2Kc2e3U?autoplay=1&enablejsapi=1&start=500&rel=0&controls=0&loop=1",
    "options": ["Settat", "Beni Mellal", "Marrakech", "El Jadida"],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/vjzbBLFueBc?autoplay=1&enablejsapi=1&start=500&rel=0&controls=0&loop=1",
    "options": ["Al sawira", "Fes", "Marrakech", "El Jadida"],
    "correct_option": 3
},
{
    "link": "https://www.youtube.com/embed/R1z5UFd3kzI?autoplay=1&enablejsapi=1&start=600&rel=0&controls=0&loop=1",
    "options": ["Kenitra", "Martil", "M'diq", "El Jadida"],
    "correct_option": 0
},
{
    "link": "https://www.youtube.com/embed/1lcE23UbMoY?autoplay=1&enablejsapi=1&start=200&rel=0&controls=0&loop=1",
    "options": ["Tangier", "Martil", "Tetouan", "Agadir"],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/8yrBIW7QUHI?autoplay=1&enablejsapi=1&start=600&rel=0&controls=0&loop=1",
    "options": ["Tangier", "Sidi Bennour", "Tetouan", "Agadir"],
    "correct_option": 2
},
{
    "link": "https://www.youtube.com/embed/wN0Csn35U48?autoplay=1&enablejsapi=1&start=100&rel=0&controls=0&loop=1",
    "options": ["Al Hoceima", "Midelt, Morocco", "Oujda", "Marrakech"],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/69fVNO-26kU?autoplay=1&enablejsapi=1&start=300&rel=0&controls=0&loop=1",
    "options": ["Agadir", "Midelt, Morocco", "Oujda", "Berkane"],
    "correct_option": 2
},
{
    "link": "https://www.youtube.com/embed/kdxonJ6BdsA?autoplay=1&enablejsapi=1&start=200&rel=0&controls=0&loop=1",
    "options": ["Taza", "Guercif, Morocco", "Oujda", "Berkane"],
    "correct_option": 3
},
{
    "link": "https://www.youtube.com/embed/8ftchk8Sq1I?autoplay=1&enablejsapi=1&start=600&rel=0&controls=0&loop=1",
    "options": ["Al Hoceïma", "Martil, Morocco", "Tangier", "Tetouan"],
    "correct_option": 0
},
{
    "link": "https://www.youtube.com/embed/9WFPzO7RotA?autoplay=1&enablejsapi=1&start=600&rel=0&controls=0&loop=1",
    "options": ["Tinghir", "Arfoud, Morocco", "Ouarzazate", "Errachidia"],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/CbCYADoup7g?autoplay=1&enablejsapi=1&start=100&rel=0&controls=0&loop=1",
    "options": ["Laayoune", "Tan-Tan, Morocco", "Samara", "Guelmim"],
    "correct_option": 3
},
{
    "link": "https://www.youtube.com/embed/k-hXLasSjx4?autoplay=1&enablejsapi=1&start=300&rel=0&controls=0&loop=1",
    "options": ["Safi", "Rabat, Morocco", "Temara", "Barrechid"],
    "correct_option": 2
},
{
    "link": "https://www.youtube.com/embed/ujTwF6U2bi8?autoplay=1&enablejsapi=1&start=400&rel=0&controls=0&loop=1",
    "options": ["Khénifra", "Taza, Morocco", "Guercif", "Barrechid"],
    "correct_option": 3
},
{
    "link": "https://www.youtube.com/embed/RaWWTrZXmF0?autoplay=1&enablejsapi=1&start=600&rel=0&controls=0&loop=1",
    "options": ["Ain El Aouda", "Azrou, Morocco", "Midalt", "Khénifra"],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/zMOd73Me8eY?autoplay=1&enablejsapi=1&start=300&rel=0&controls=0&loop=1",
    "options": ["Barrechid", "Oujda, Morocco", "Tinghir", "Missour"],
    "correct_option": 3
},
{
    "link": "https://www.youtube.com/embed/8DkLGEK_UAE?autoplay=1&enablejsapi=1&start=500&rel=0&controls=0&loop=1",
    "options": ["Chichaoua", "Beni mellal, Morocco", "Marrakech", "Settat"],
    "correct_option": 0
},
{
    "link": "https://www.youtube.com/embed/1ttGQ864qMI?autoplay=1&enablejsapi=1&start=300&rel=0&controls=0&loop=1",
    "options": ["Arfoud", "Beni mellal, Morocco", "Marrakech", "Aziylal"],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/LFUiAxkMU44?autoplay=1&enablejsapi=1&start=200&rel=0&controls=0&loop=1",
    "options": ["Demnat", "Zagora, Morocco", "Azemmour", "Aziylal"],
    "correct_option": 3
},
{
    "link": "https://www.youtube.com/embed/jFXJLnsDsNw?autoplay=1&enablejsapi=1&start=50&rel=0&controls=0&loop=1",
    "options": ["Tiznit", "Kouribga, Morocco", "Aït Melloul", "Agadir"],
    "correct_option": 2
},
{
    "link": "https://www.youtube.com/embed/57ihivVzkR4?autoplay=1&enablejsapi=1&start=500&rel=0&controls=0&loop=1",
    "options": ["Meknès", "Béni Mellal, Morocco", "Settat", "Larache"],
    "correct_option": 0
},
{
    "link": "https://www.youtube.com/embed/F3DgG4Yc-0E?autoplay=1&enablejsapi=1&start=600&rel=0&controls=0&loop=1",
    "options": ["Casablanca", "Larache", "Settat", "Nador"],
    "correct_option": 1
},
{
    "link": "https://www.youtube.com/embed/Op38VrT8lEU?autoplay=1&enablejsapi=1&start=600&rel=0&controls=0&loop=1",
    "options": ["Sidi ifni", "Martil", "Aftissat", "Dakhla"],
    "correct_option": 3
}]


export default function Game() {
    const [quizData, setQuizData] = useState(DB);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [toggleMute, setToggleMute] = useState(true);
    const [toggleHide, setToggleHide] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] = useState(null);
    const [passedQst, setPassedQst] = useState(0);
    const [score, setScore] = useState(0);
    const [modal, setModal] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [loading, setLoading] = useState()
    const [loadingOptions, setLoadingOptions] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getRandomQuestion()
        setStartTime(moment());
    }, []);


    const setDelayedLoading = (setter, delay) => {
        setter(true);
        setTimeout(() => {
            setter(false);
        }, delay);
    };

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * quizData.length);
        setCurrentQuestion(quizData[randomIndex]);
        setPassedQst(passedQst + 1)
        const updatedQuizData = [...quizData];
        updatedQuizData.splice(randomIndex, 1);
        setQuizData(updatedQuizData);
        setDelayedLoading(setLoading, 2500);
        setDelayedLoading(setLoadingOptions, 8500);
    };

    const handleOptionClick = (optionIndex) => {
        const correctOptionIndex = currentQuestion.correct_option;
        const isCorrect = optionIndex === correctOptionIndex;
        setIsAnswerCorrect({ index: optionIndex, isCorrect });
        setQuestionsAnsweredCorrectly(correctOptionIndex)
        isCorrect && setScore(score + 1)

        setTimeout(() => {
            if (passedQst === 10) {
                Achievements()
                return 1
            }
            setIsAnswerCorrect(null);
            setQuestionsAnsweredCorrectly(null);
            getRandomQuestion()
        }, 4000);
    };


    function Achievements() {
        setModal(true)
        if (startTime) {
            const currentTime = moment();
            const duration = moment.duration(currentTime.diff(startTime));
            setElapsedTime(duration.asMilliseconds());
            setStartTime(null);
        }
    }

    return (
        <section className="flex items-center justify-center relative h-screen overflow-hidden bg-gray-500">
            {currentQuestion && <iframe id="yourIframeId" className="grayscale w-full h-full scale-110" style={{ pointerEvents: 'none' }}
                src={currentQuestion.link + (!toggleMute ? '&mute=1' : '')}
                allow="autoplay" title='guess' frameBorder={0} />}

            <div className="absolute z-50 top-3 left-3 md:left-10 text-3xl font-bold text-gray-100 uppercase">.Explore Morocco
                <img src="/images/flag.png" className="w-20 h-20 absolute -top-7 -right-7 rotate-6 animate-pulse" alt="" />
            </div>
            <div className="absolute top-20 md:top-10 z-50 flex gap-6">
                <span className="font-mono text-xl text-gray-900 md:text-gray-100 bg-white md:bg-black bg-opacity-80 py-2 px-5 rounded-full">
                    {passedQst} / 10
                </span>
                <div className="flex gap-2">
                    <span onClick={() => setToggleMute(!toggleMute)} className="text-gray-900 md:text-gray-100 bg-white md:bg-black bg-opacity-80 py-2 px-3 rounded-full flex items-center cursor-pointer" title={`${toggleMute ? 'Mute' : 'Unmute'} The Video`}>
                        {toggleMute ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg>}
                    </span>
                    <span onClick={() => setToggleHide(!toggleHide)} className="text-gray-900 md:text-gray-100 bg-white md:bg-black bg-opacity-80 py-2 px-3 rounded-full flex items-center cursor-pointer" title={`${toggleHide ? "Show" : "Hide"} Options`}>
                        {toggleHide ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>}
                    </span>
                    <span onClick={() => navigate('/')} className="text-gray-900 md:text-gray-100 bg-white md:bg-black bg-opacity-80 py-2 px-3 rounded-full flex items-center cursor-pointer" title="Leave The Game ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </span>
                </div>
            </div>
            {!loading && <div className="absolute top-3 right-3 md:right-10 saturate-50 mx-auto hidden md:block " id="box" />}
            {!toggleHide && <>
                {loading ?
                    <main className="grid w-full h-full place-items-center absolute bg-black gap-5">
                        <div className="saturate-50 mx-auto" id="box1" />
                    </main>
                    : loadingOptions ?
                        <div class="absolute bottom-40 py-4 px-7 bg-gray-200 border border-white rounded-full">
                            <Timer />
                        </div>
                        :
                        <main className="grid w-full place-items-center absolute bottom-24 gap-5">
                            {currentQuestion && currentQuestion.options.map((item, index) => (
                                <div className="flex w-full items-center justify-center gap-4">
                                    <div onClick={() => { isAnswerCorrect === null && handleOptionClick(index) }} className={`py-1 w-[20em] px-6 rounded-md cursor-pointer hover:scale-105 
                        ${isAnswerCorrect?.index === index && !isAnswerCorrect?.isCorrect ? 'bg-red-600 text-gray-100 animate-pluse'
                                            : questionsAnsweredCorrectly === index ? 'bg-green-600 text-gray-100 animate-pluse' : 'bg-gray-200 text-gray-600'}`}>
                                        <p className="text-center text-md font-bold font-serif ">{item} , Morocco</p>
                                    </div>
                                    <a href={`https://www.google.com/maps/place/${item}`} target="_blank" rel="noopener noreferrer">
                                        <svg version={1.0} id="Layer_1" className="w-7 h-7 cursor-pointer hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                                            <g>
                                                <g>
                                                    <path fill="#45AAB8" d="M46.773,14.112c0.515,0.052,0.955,0.162,1.309,0.252c0.166,0.042,0.384,0.097,0.505,0.113
			c0.448-0.344,0.963-0.978,0.948-1.507c-0.477-0.184-1.27-0.527-1.872-1.448c-0.596-0.938-0.7-1.829-0.776-2.479
			c-0.044-0.372-0.078-0.666-0.189-0.959c-0.163-0.426-0.175-0.896-0.034-1.329c0.088-0.272,0.194-0.506,0.299-0.734L43,7.271v5.803
			c0.274,0.094,0.548,0.188,0.794,0.275C44.813,13.714,45.619,14.001,46.773,14.112z" />
                                                    <path fill="#45AAB8" d="M2,11v6.156c0.598-0.004,1.188-0.036,1.922-0.076l0.807-0.044c0.425-0.023,0.847-0.168,1.335-0.335
			c0.661-0.228,1.412-0.484,2.314-0.484c0.725,0,1.437,0.173,2.098,0.504c1.245,0.607,1.876,1.559,2.383,2.322
			c0.274,0.413,0.511,0.77,0.811,1.021c0.709,0.595,1.312,0.808,2.148,1.102c0.826,0.292,1.763,0.622,2.845,1.348
			c0.894,0.601,1.636,1.149,2.338,1.737V2.606L3.309,9.124C2.525,9.412,2,10.166,2,11z" />
                                                    <path fill="#45AAB8" d="M20.09,43.093c-0.058-0.004-0.114-0.009-0.17-0.012c-0.002,0.063-0.004,0.127-0.006,0.181
			c-0.022,0.691-0.055,1.735-0.769,2.666c-0.82,1.09-1.949,1.666-3.265,1.666c-0.718,0-1.395-0.167-1.991-0.314l-0.363-0.088
			c-1.226-0.279-1.983-1.005-2.537-1.534c-0.263-0.252-0.512-0.49-0.659-0.526c-0.365-0.088-0.682-0.164-0.861-0.164
			c-0.043,0-0.122,0-0.3,0.072c-0.45,0.184-0.708,0.805-1.19,2.18c-0.151,0.434-0.31,0.884-0.489,1.333
			c-0.162,0.41-0.198,0.939-0.235,1.5c-0.075,1.11-0.177,2.632-1.433,3.827C4.926,54.734,3.91,55.15,2.719,55.15
			c-0.247,0-0.483-0.026-0.719-0.055V60c0,0.635,0.306,1.238,0.818,1.613C3.163,61.866,3.572,62,4,62
			c0.204,0,0.407-0.031,0.603-0.093L21,56.729V43.193c-0.111-0.041-0.222-0.063-0.34-0.068
			C20.462,43.119,20.272,43.106,20.09,43.093z" />
                                                    <path fill="#45AAB8" d="M23.632,2.103C23.428,2.034,23.216,2,23,2v24.147c0.383,0.402,0.779,0.836,1.213,1.329
			c0.519,0.591,0.866,1.182,1.146,1.657c0.334,0.567,0.521,0.873,0.81,1.06c0.04,0.025,0.059,0.031,0.078,0.032
			c0.153,0,0.454-0.089,0.745-0.176c0.528-0.157,1.188-0.354,1.961-0.354c0.571,0,1.128,0.109,1.669,0.33l0.347,0.143
			c1.569,0.643,3.521,1.443,4.364,4.208c0.527,1.7,0.525,3.133-0.001,4.777c-0.387,1.233-1.182,1.86-1.657,2.234
			c-0.111,0.089-0.265,0.209-0.295,0.249l-0.017,0.052c-0.024,0.084,0.025,0.346,0.07,0.576c0.123,0.635,0.309,1.595-0.14,2.712
			c-0.764,1.856-2.263,2.798-4.456,2.798c-0.229,0-0.461-0.009-0.689-0.023c-1.413-0.083-2.312-0.787-2.968-1.302
			c-0.241-0.189-0.47-0.368-0.71-0.51c-0.576-0.34-1.048-0.718-1.47-1.091v11.247l0.603,0.19L41,61.781V23.214
			c-0.183,0.004-0.362,0.007-0.552,0.014c-0.373,0.013-0.761,0.026-1.177,0.026c-0.229,0-0.467-0.004-0.716-0.015
			c-0.09-0.003-0.179-0.005-0.265-0.005c-0.462,0-0.888,0.049-1.339,0.1c-0.488,0.056-0.993,0.113-1.562,0.113
			c-0.7,0-1.371-0.091-2.052-0.279c-0.225-0.062-0.464-0.107-0.717-0.154c-1.016-0.191-2.55-0.479-3.646-2.281
			c-1.29-2.169-1.303-4.838-0.027-7.151c1.267-2.267,3.243-2.387,4.551-2.466c0.312-0.019,0.605-0.037,0.898-0.079
			c0.375-0.052,0.75-0.077,1.114-0.077c1.619,0,2.844,0.492,4.026,0.968c0.482,0.193,0.958,0.37,1.462,0.53V7.892l-0.6-0.199
			L23.632,2.103z" />
                                                    <path fill="#45AAB8" d="M60.979,30.936l-0.104-0.021c-1.498-0.3-2.675-0.772-3.893-2.189c-0.879-1.005-1.068-2.183-1.207-3.042
			c-0.048-0.301-0.12-0.751-0.198-0.893c-0.146,0.012-0.427,0.09-0.676,0.158c-0.509,0.141-1.142,0.316-1.875,0.343
			c-0.615,0.027-1.179,0.179-1.775,0.34c-0.728,0.196-1.553,0.418-2.508,0.418c-0.685,0-1.344-0.111-2.021-0.342
			c-1.055-0.361-1.744-0.943-2.298-1.41c-0.379-0.32-0.653-0.551-1.007-0.698c-0.146-0.062-0.282-0.106-0.418-0.15v38.325
			l17.632-5.877C61.45,55.625,62,54.862,62,54V31.096C61.651,31.054,61.311,30.998,60.979,30.936z" />
                                                </g>
                                                <g>
                                                    <path fill="#394240" d="M62.364,0.773c-0.694-0.509-1.526-0.772-2.366-0.772c-0.403,0-0.809,0.061-1.202,0.185L41.033,5.795
			l-16.769-5.59C23.854,0.068,23.427,0,22.999,0c-0.468,0-0.937,0.082-1.382,0.247l-19,7C1.045,7.826,0,9.324,0,11v49
			c0,1.274,0.607,2.473,1.636,3.227C2.33,63.735,3.16,64,4,64c0.404,0,0.811-0.062,1.204-0.186L23,58.194l17.796,5.62
			C41.188,63.938,41.593,64,41.999,64c0.428,0,0.855-0.068,1.266-0.205l18-6C62.898,57.25,64,55.722,64,54V4
			C64,2.726,63.393,1.527,62.364,0.773z M21,56.729L4.603,61.907C4.407,61.969,4.204,62,4,62c-0.428,0-0.837-0.134-1.182-0.387
			C2.306,61.238,2,60.635,2,60v-4.904c0.235,0.028,0.472,0.055,0.719,0.055c1.191,0,2.207-0.416,3.103-1.271
			c1.256-1.195,1.357-2.717,1.433-3.827c0.037-0.561,0.073-1.09,0.235-1.5c0.18-0.449,0.338-0.899,0.489-1.333
			c0.482-1.375,0.74-1.996,1.19-2.18c0.178-0.072,0.257-0.072,0.3-0.072c0.18,0,0.496,0.076,0.861,0.164
			c0.147,0.036,0.396,0.274,0.659,0.526c0.554,0.529,1.312,1.255,2.537,1.534l0.363,0.088c0.597,0.147,1.273,0.314,1.991,0.314
			c1.315,0,2.444-0.576,3.265-1.666c0.714-0.931,0.746-1.975,0.769-2.666c0.002-0.054,0.004-0.117,0.006-0.181
			c0.056,0.003,0.112,0.008,0.17,0.012c0.183,0.014,0.372,0.026,0.57,0.032c0.118,0.005,0.229,0.027,0.34,0.068V56.729z M21,41.169
			c-0.095-0.013-0.18-0.039-0.28-0.043c-0.372-0.011-0.71-0.055-1.025-0.055c-0.485,0-0.921,0.102-1.357,0.576
			c-0.753,0.811-0.105,2.186-0.79,3.078c-0.498,0.662-1.057,0.868-1.666,0.868c-0.592,0-1.231-0.193-1.91-0.353
			c-1.364-0.311-1.815-1.725-3.173-2.055c-0.509-0.122-0.916-0.22-1.329-0.22c-0.329,0-0.661,0.062-1.054,0.22
			c-1.688,0.687-1.969,2.589-2.786,4.63c-0.668,1.69-0.005,3.489-1.188,4.616c-0.575,0.549-1.126,0.718-1.722,0.718
			c-0.231,0-0.471-0.026-0.719-0.064v-33.93c0.875-0.007,1.722-0.066,2.839-0.123c1.395-0.077,2.395-0.816,3.539-0.816
			c0.384,0,0.784,0.083,1.221,0.302c1.337,0.652,1.586,2.073,2.785,3.077c1.81,1.518,3.247,1.292,5.163,2.577
			c1.428,0.959,2.418,1.758,3.453,2.786V41.169z M21,24.25c-0.702-0.588-1.444-1.137-2.338-1.737
			c-1.082-0.726-2.019-1.056-2.845-1.348c-0.836-0.294-1.439-0.507-2.148-1.102c-0.3-0.251-0.536-0.607-0.811-1.021
			c-0.507-0.764-1.138-1.715-2.383-2.322c-0.661-0.331-1.373-0.504-2.098-0.504c-0.902,0-1.653,0.257-2.314,0.484
			c-0.488,0.167-0.91,0.312-1.335,0.335L3.922,17.08C3.188,17.12,2.598,17.152,2,17.156V11c0-0.834,0.525-1.588,1.309-1.876
			L21,2.606V24.25z M23,29.161c0.747,1.009,1.04,2.037,2.081,2.711c0.404,0.262,0.789,0.354,1.165,0.354
			c0.901,0,1.754-0.529,2.706-0.529c0.289,0,0.588,0.049,0.899,0.176c1.597,0.666,2.955,1.078,3.57,3.098
			c0.403,1.3,0.414,2.296,0,3.587c-0.408,1.305-1.603,1.236-1.979,2.569c-0.335,1.14,0.43,2.019,0,3.091
			c-0.53,1.29-1.509,1.559-2.606,1.559c-0.188,0-0.379-0.008-0.572-0.02c-1.178-0.069-1.708-0.907-2.78-1.539
			c-1.021-0.602-1.726-1.426-2.484-2.075V29.161z M41,21.214c-0.543,0.011-1.101,0.04-1.729,0.04c-0.204,0-0.414-0.004-0.634-0.013
			c-0.118-0.005-0.233-0.007-0.347-0.007c-1.107,0-1.954,0.213-2.901,0.213c-0.467,0-0.957-0.052-1.517-0.206
			c-1.29-0.358-2.361-0.188-3.179-1.532c-0.949-1.595-0.901-3.518,0-5.152c0.944-1.69,2.367-1.306,3.975-1.539
			c0.296-0.04,0.575-0.059,0.843-0.059c1.997,0,3.314,1.027,5.488,1.592V21.214z M41,12.457c-0.504-0.16-0.979-0.337-1.462-0.53
			c-1.183-0.476-2.407-0.968-4.026-0.968c-0.364,0-0.739,0.025-1.114,0.077c-0.293,0.042-0.587,0.061-0.898,0.079
			c-1.308,0.079-3.284,0.199-4.551,2.466c-1.275,2.313-1.263,4.982,0.027,7.151c1.096,1.803,2.63,2.09,3.646,2.281
			c0.253,0.047,0.492,0.092,0.717,0.154c0.681,0.188,1.352,0.279,2.052,0.279c0.569,0,1.074-0.058,1.562-0.113
			c0.451-0.051,0.877-0.1,1.339-0.1c0.086,0,0.175,0.002,0.265,0.005c0.249,0.011,0.486,0.015,0.716,0.015
			c0.416,0,0.804-0.014,1.177-0.026c0.189-0.007,0.369-0.01,0.552-0.014v38.567l-17.397-5.494L23,56.097V44.85
			c0.422,0.373,0.894,0.751,1.47,1.091c0.24,0.142,0.469,0.32,0.71,0.51c0.656,0.515,1.555,1.219,2.968,1.302
			c0.229,0.015,0.461,0.023,0.689,0.023c2.193,0,3.692-0.941,4.456-2.798c0.448-1.117,0.263-2.077,0.14-2.712
			c-0.045-0.23-0.095-0.492-0.07-0.576l0.017-0.052c0.03-0.04,0.184-0.16,0.295-0.249c0.476-0.374,1.271-1.001,1.657-2.234
			c0.526-1.645,0.528-3.077,0.001-4.777c-0.843-2.765-2.795-3.565-4.364-4.208l-0.347-0.143c-0.541-0.221-1.098-0.33-1.669-0.33
			c-0.773,0-1.433,0.196-1.961,0.354c-0.291,0.087-0.592,0.176-0.745,0.176c-0.02-0.001-0.038-0.007-0.078-0.032
			c-0.288-0.187-0.476-0.492-0.81-1.06c-0.279-0.476-0.627-1.066-1.146-1.657c-0.434-0.493-0.83-0.927-1.213-1.329V2
			c0.216,0,0.428,0.034,0.632,0.103L40.4,7.692L41,7.892V12.457z M43,7.271l3.962-1.251c-0.104,0.229-0.211,0.462-0.299,0.734
			c-0.141,0.434-0.129,0.903,0.034,1.329c0.111,0.293,0.146,0.587,0.189,0.959c0.076,0.65,0.181,1.542,0.776,2.479
			c0.603,0.921,1.396,1.265,1.872,1.448c0.015,0.529-0.5,1.163-0.948,1.507c-0.121-0.017-0.339-0.071-0.505-0.113
			c-0.354-0.09-0.794-0.2-1.309-0.252c-1.154-0.111-1.96-0.398-2.979-0.763c-0.246-0.088-0.52-0.182-0.794-0.275V7.271z M62,54
			c0,0.862-0.55,1.625-1.368,1.897L43,61.774V23.449c0.136,0.044,0.271,0.089,0.418,0.15c0.354,0.147,0.628,0.378,1.007,0.698
			c0.554,0.467,1.243,1.049,2.298,1.41c0.677,0.23,1.336,0.342,2.021,0.342c0.955,0,1.78-0.222,2.508-0.418
			c0.597-0.161,1.16-0.312,1.775-0.34c0.733-0.026,1.366-0.202,1.875-0.343c0.249-0.068,0.529-0.146,0.676-0.158
			c0.078,0.142,0.15,0.592,0.198,0.893c0.139,0.859,0.328,2.037,1.207,3.042c1.218,1.417,2.395,1.89,3.893,2.189l0.104,0.021
			c0.331,0.062,0.672,0.118,1.021,0.16V54z M62,29.086c-0.234-0.036-0.477-0.083-0.732-0.132c-1.167-0.233-1.899-0.521-2.78-1.546
			c-1.04-1.188-0.435-3.11-1.581-4.114c-0.442-0.378-0.866-0.504-1.294-0.504c-0.824-0.001-1.662,0.468-2.675,0.504
			c-1.666,0.074-2.812,0.756-4.194,0.756c-0.427,0-0.877-0.064-1.372-0.233c-1.342-0.46-1.856-1.511-3.178-2.061
			c-0.426-0.18-0.815-0.291-1.193-0.374V15.19c1.126,0.401,2.13,0.773,3.575,0.912c0.791,0.079,1.43,0.38,2.07,0.38
			c0.36,0,0.721-0.096,1.108-0.38c1.199-0.894,2.229-2.522,1.592-4.108c-0.414-1.045-1.411-0.652-1.995-1.545
			c-0.626-0.984-0.329-1.883-0.785-3.078c0.284-0.876,0.768-1.492,1.036-2.185l9.794-3.093c0.195-0.062,0.398-0.093,0.603-0.093
			c0.425,0,0.845,0.137,1.184,0.386C61.694,2.762,62,3.365,62,4V29.086z" />
                                                    <path fill="#394240" d="M55.306,39.322c-0.678-0.208-1.318-0.404-2.01-0.404c-0.652,0-1.241,0.177-1.804,0.543
			c-0.632,0.417-0.814,0.932-0.856,1.289c-0.111,0.965,0.604,1.723,1.361,2.525c0.506,0.536,1.27,1.346,1.122,1.731
			c-0.096,0.256-0.386,0.396-0.979,0.633c-0.737,0.296-1.853,0.741-2.094,2.071c-0.136,0.738,0.032,1.416,0.485,1.96
			c0.637,0.763,1.791,1.183,3.253,1.183c1.49,0,2.955-0.43,3.928-1.156c1.653-1.268,2.287-3.12,1.884-5.503
			C59.194,41.763,57.732,40.085,55.306,39.322z M56.505,48.103c-0.61,0.456-1.679,0.751-2.721,0.751
			c-0.919,0-1.523-0.232-1.717-0.464c-0.034-0.041-0.093-0.111-0.055-0.32c0.037-0.199,0.191-0.301,0.87-0.572
			c0.715-0.286,1.694-0.678,2.107-1.782c0.593-1.553-0.639-2.858-1.539-3.812c-0.238-0.252-0.57-0.604-0.735-0.843
			c0.525-0.277,1.124-0.096,2.054,0.19c1.642,0.517,2.575,1.586,2.854,3.274C57.905,46.19,57.557,47.296,56.505,48.103z" />
                                                </g>
                                                <g>
                                                    <path fill="#F9EBB2" d="M61.182,2.387c-0.339-0.249-0.759-0.386-1.184-0.386c-0.204,0-0.407,0.031-0.603,0.093l-9.794,3.093
			c-0.269,0.692-0.752,1.309-1.036,2.185c0.456,1.195,0.159,2.094,0.785,3.078c0.584,0.893,1.581,0.5,1.995,1.545
			c0.637,1.586-0.393,3.215-1.592,4.108c-0.388,0.284-0.748,0.38-1.108,0.38c-0.641,0-1.279-0.301-2.07-0.38
			C45.13,15.964,44.126,15.592,43,15.19v6.191c0.378,0.083,0.768,0.194,1.193,0.374c1.321,0.55,1.836,1.601,3.178,2.061
			c0.495,0.169,0.945,0.233,1.372,0.233c1.383,0,2.528-0.682,4.194-0.756c1.013-0.036,1.851-0.505,2.675-0.504
			c0.428,0,0.852,0.126,1.294,0.504c1.146,1.004,0.541,2.926,1.581,4.114c0.881,1.024,1.613,1.312,2.78,1.546
			c0.256,0.049,0.498,0.096,0.732,0.132V4C62,3.365,61.694,2.762,61.182,2.387z" />
                                                    <path fill="#F9EBB2" d="M34.669,13.018c-1.607,0.233-3.03-0.151-3.975,1.539c-0.901,1.635-0.949,3.558,0,5.152
			c0.817,1.345,1.889,1.174,3.179,1.532c0.56,0.154,1.05,0.206,1.517,0.206c0.947,0,1.794-0.213,2.901-0.213
			c0.113,0,0.229,0.002,0.347,0.007c0.22,0.009,0.43,0.013,0.634,0.013c0.628,0,1.186-0.029,1.729-0.04v-6.663
			c-2.174-0.564-3.491-1.592-5.488-1.592C35.244,12.959,34.965,12.978,34.669,13.018z" />
                                                    <path fill="#F9EBB2" d="M29.852,31.872c-0.312-0.127-0.61-0.176-0.899-0.176c-0.952,0-1.805,0.529-2.706,0.529
			c-0.376,0-0.761-0.092-1.165-0.354C24.04,31.198,23.747,30.17,23,29.161v12.98c0.759,0.649,1.463,1.474,2.484,2.075
			c1.072,0.632,1.603,1.47,2.78,1.539c0.193,0.012,0.385,0.02,0.572,0.02c1.098,0,2.076-0.269,2.606-1.559
			c0.43-1.072-0.335-1.951,0-3.091c0.376-1.333,1.57-1.265,1.979-2.569c0.414-1.291,0.403-2.287,0-3.587
			C32.807,32.95,31.448,32.538,29.852,31.872z" />
                                                    <path fill="#F9EBB2" d="M12.384,21.596c-1.199-1.004-1.448-2.425-2.785-3.077c-0.437-0.219-0.837-0.302-1.221-0.302
			c-1.145,0-2.145,0.739-3.539,0.816C3.722,19.09,2.875,19.149,2,19.156v33.93c0.248,0.038,0.487,0.064,0.719,0.064
			c0.596,0,1.146-0.169,1.722-0.718c1.184-1.127,0.521-2.926,1.188-4.616c0.817-2.041,1.099-3.943,2.786-4.63
			c0.393-0.158,0.725-0.22,1.054-0.22c0.413,0,0.82,0.098,1.329,0.22c1.357,0.33,1.809,1.744,3.173,2.055
			c0.679,0.159,1.318,0.353,1.91,0.353c0.609,0,1.168-0.206,1.666-0.868c0.685-0.893,0.037-2.268,0.79-3.078
			c0.437-0.475,0.872-0.576,1.357-0.576c0.315,0,0.653,0.044,1.025,0.055c0.101,0.004,0.186,0.03,0.28,0.043v-14.21
			c-1.035-1.028-2.025-1.827-3.453-2.786C15.631,22.888,14.193,23.113,12.384,21.596z" />
                                                    <path fill="#F9EBB2" d="M54.77,41.25c-0.93-0.286-1.528-0.468-2.054-0.19c0.165,0.238,0.497,0.591,0.735,0.843
			c0.9,0.954,2.132,2.26,1.539,3.812c-0.413,1.104-1.393,1.496-2.107,1.782c-0.679,0.271-0.833,0.373-0.87,0.572
			c-0.038,0.209,0.021,0.279,0.055,0.32c0.193,0.231,0.798,0.464,1.717,0.464c1.042,0,2.11-0.295,2.721-0.751
			c1.052-0.807,1.4-1.912,1.118-3.578C57.345,42.836,56.411,41.767,54.77,41.25z" />
                                                </g>
                                                <polygon opacity="0.2" fill="#231F20" points="41,61.781 23,56 23,2 41,8 	" />
                                            </g>
                                        </svg></a>
                                </div>
                            ))}
                        </main>
                }
                <p className="absolute bottom-3 text-gray-200 text-xs font-bold italic"> Copyright © 2023-2024 Abdelhakim Hizmi.</p>
                <div className="absolute bottom-8 scale-90">
                    <a href="https://www.facebook.com/hasan.hizmi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 text-gray-100  rounded-full mr-1 hover:text-red-500 hover:border-red-500">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/_hakimhizmi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 text-gray-100  rounded-full mr-1 hover:text-red-500 hover:border-red-500">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/hakiim_hizmi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 text-gray-100  rounded-full mr-1 hover:text-red-500 hover:border-red-500">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://github.com/Hakimhizmi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 text-gray-100 rounded-full mr-1 hover:text-red-500 hover:border-red-500">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                            </path>
                        </svg>
                    </a>
                </div>
                {!loading && !loadingOptions ? <a href={currentQuestion && currentQuestion.link && `https://www.youtube.com/watch?v=${currentQuestion.link.match(/\/embed\/([^?]+)/)[1]}`} target="_blank" rel="noopener noreferrer" className="absolute bottom-10 md:bottom-3 right-5 underline text-gray-200 text-sm font-bold italic cursor-pointer">video source
                </a> : ''}
            </>}

            {modal &&
                <div className='w-screen h-screen absolute bg-black bg-opacity-90 flex items-center justify-center'>
                    <ConfettiExplosion numberOfPieces={500}
                        recycle={false}
                        gravity={0.5}
                        initialVelocityX={5}
                        initialVelocityY={10} />
                    <div className='absolute bg-white bg-opacity-40 rounded-xl p-5 w-4/5 md:w-1/4 overflow-hidden'>

                        <svg onClick={() => navigate('/')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-9 h-9 float-right text-gray-100 cursor-pointer hover:scale-110">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <h1 class="mb-4 mt-4 text-3xl font-extrabold text-center text-gray-100">ACHIEVEMENTS</h1>
                        <div class="flex items-center justify-center mt-4 mb-4" >
                            {Array.from({ length: (score / 2) }, (_, index) => (
                                <svg class="mx-1 w-12 h-12 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                            ))}
                            {Array.from({ length: (5 - Math.floor(score / 2)) }, (_, index) => (
                                <svg class="mx-1 w-12 h-12 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                            ))}
                        </div>
                        <div class="text-yellow-100">
                            <h1 class="text-3xl text-center mb-3 font-extralight">The time you spent in the game ?</h1>
                            <div className="text-xl md:text-6xl text-center flex flex-wrap gap-2 md:gap-0 w-full items-center justify-center">
                                <div className="text-2xl mr-1 font-extralight">in</div>
                                <div className="mx-1 w-20 p-2 bg-white text-yellow-500 rounded-lg">
                                    <div className="font-mono leading-none">{Math.floor(moment.duration(elapsedTime).asDays())}</div>
                                    <div className="font-mono uppercase text-sm leading-none">Days</div>
                                </div>
                                <div className="mx-1 w-20 p-2 bg-white text-yellow-500 rounded-lg">
                                    <div className="font-mono leading-none">{moment.duration(elapsedTime).hours()}</div>
                                    <div className="font-mono uppercase text-sm leading-none">Hours</div>
                                </div>
                                <div className="mx-1 w-20 p-2 bg-white text-yellow-500 rounded-lg">
                                    <div className="font-mono leading-none">{moment.duration(elapsedTime).minutes()}</div>
                                    <div className="font-mono uppercase text-sm leading-none">Minutes</div>
                                </div>
                                <div className="text-2xl mx-1 font-extralight">and</div>
                                <div className="mx-1 w-20 p-2 bg-white text-yellow-500 rounded-lg">
                                    <div className="font-mono leading-none">{moment.duration(elapsedTime).seconds()}</div>
                                    <div className="font-mono uppercase text-sm leading-none">Seconds</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 mt-6 px-5">
                            <button onClick={() => window.location.reload()} class="p-2 bg-green-600 rounded-md text-gray-100 w-full text-2xl font-bold hover:bg-green-700">
                                <svg version="1.1" className='w-8 h-8 inline-flex mr-3' fill='currentColor' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 118.66" style={{ enableBackground: 'new 0 0 122.88 118.66' }} xmlSpace="preserve"><g><path d="M16.68,22.2c-1.78,2.21-3.43,4.55-5.06,7.46C5.63,40.31,3.1,52.39,4.13,64.2c1.01,11.54,5.43,22.83,13.37,32.27 c2.85,3.39,5.91,6.38,9.13,8.97c11.11,8.93,24.28,13.34,37.41,13.22c13.13-0.12,26.21-4.78,37.14-13.98 c3.19-2.68,6.18-5.73,8.91-9.13c6.4-7.96,10.51-17.29,12.07-27.14c1.53-9.67,0.59-19.83-3.07-29.66 c-3.49-9.35-8.82-17.68-15.78-24.21C96.7,8.33,88.59,3.76,79.2,1.48c-2.94-0.71-5.94-1.18-8.99-1.37c-3.06-0.2-6.19-0.13-9.4,0.22 c-2.01,0.22-3.46,2.03-3.24,4.04c0.22,2.01,2.03,3.46,4.04,3.24c2.78-0.31,5.49-0.37,8.14-0.19c2.65,0.17,5.23,0.57,7.73,1.17 c8.11,1.96,15.1,5.91,20.84,11.29c6.14,5.75,10.85,13.12,13.94,21.43c3.21,8.61,4.04,17.51,2.7,25.96 C113.59,75.85,110,84,104.4,90.96c-2.47,3.07-5.12,5.78-7.91,8.13c-9.59,8.07-21.03,12.15-32.5,12.26 c-11.47,0.11-23-3.76-32.76-11.61c-2.9-2.33-5.62-4.98-8.13-7.97c-6.92-8.22-10.77-18.09-11.65-28.2 c-0.91-10.38,1.32-20.99,6.57-30.33c1.59-2.82,3.21-5.07,5.01-7.24l0.53,14.7c0.07,2.02,1.76,3.6,3.78,3.53 c2.02-0.07,3.6-1.76,3.53-3.78l-0.85-23.42c-0.07-2.02-1.76-3.59-3.78-3.52c-0.13,0.01-0.25,0.02-0.37,0.03v0l-22.7,3.19 c-2,0.28-3.4,2.12-3.12,4.13c0.28,2,2.12,3.4,4.13,3.12L16.68,22.2L16.68,22.2L16.68,22.2z M85.78,58.71L53.11,80.65V37.12 L85.78,58.71L85.78,58.71z" /></g></svg>
                                Replay</button>
                        </div>
                    </div>
                </div>}

        </section>

    )
}
