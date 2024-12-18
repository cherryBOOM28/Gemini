import React, { useContext, useState } from 'react'
import style from './Sidebar.module.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)
  const {onSent, previousPrompt, setRecentPrompt, newChat} = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  } 

  return (
  <div className={style.sidebar}>
    <div className={style.top}>
      <img onClick={() => setExtended(prev => !prev)} className={style.menu} src={assets.menu_icon} alt="menu icon" />
      <div onClick={() => newChat()} className={style.new__chat}>
        <img src={assets.plus_icon} alt="" />
        {extended ? <p>New chat</p> : null}
      </div>
      {extended ?
        <div className={`${style.recent} ${extended ? style.recentVisible : ''}`}>
          <p className={style.recent__title}>Recent</p>
          {previousPrompt.map((item, index) => {
            return (
              <div onClick={() => loadPrompt(item)} className={style.recent__entry}>
                <img src={assets.message_icon} alt="" />
              <p>{item.slice(0, 18)}...</p>
          </div>  
            )
          })}
          
        </div>
        : null
      }
    </div>
    <div className={style.bottom}>
      <div className={`${style.bottom__item} ${style.recent__entry}`}>
        <img src={assets.question_icon} alt="" />
        {extended ? <p>Help</p> : null}
      </div>

      <div className={`${style.bottom__item} ${style.recent__entry}`}>
        <img src={assets.history_icon} alt="" />
        {extended ? <p>Activity</p> : null}
      </div>

      <div className={`${style.bottom__item} ${style.recent__entry}`}>
        <img src={assets.setting_icon} alt="" />
        {extended ? <p>Settings</p> : null}
      </div>
    </div>
  </div>
  )
}

export default Sidebar
