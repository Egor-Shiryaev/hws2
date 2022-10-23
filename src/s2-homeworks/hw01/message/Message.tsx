import React from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1';


export type MessagePropsType = {
    message: MessageType
}


const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src="https://icdn.lenta.ru/images/2020/12/22/14/20201222142754269/square_320_1d6de3806d700e48f1f2efd9d868c422.jpg"

                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        Иван
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        Добрый день Добрый день Добрый день
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                22:22
                {/**/}
            </div>
        </div>
    )
}

export default Message
