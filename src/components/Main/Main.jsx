import React, { useContext } from 'react'
import style from './Main.module.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    return (
        <div className={style.main}>
            <div className={style.nav}>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className={style.main__container}>
                {!showResult
                ? <>
                    <div className={style.greet}>
                        <p><span>Hello, Dev</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <p>Suggest beautifulplaces to see on a upcoming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className={style.card}>
                            <p>Brifely summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className={style.card}>
                            <p>Brainstorm team bonding activatesfor our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className={style.card}>
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </> :
                <div className={style.result}>
                    <div className={style.result__title}>
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className={style.result__data}>
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ? <div className={style.loader}>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>
                }
                

                <div className={style.main__bottom}>
                    <div className={style.search__box}>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Inter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className={style.bottom__info}>
                        Gemini may display inaccurate info, inculing about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main