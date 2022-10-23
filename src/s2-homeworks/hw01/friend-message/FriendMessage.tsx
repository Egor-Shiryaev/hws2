import React from 'react'
import s from './FriendMessage.module.css'

type FriendMessageType = {
    message: {
        id: number
    }

}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src="https://holst25.ru/wp-content/uploads/2017/06/1112-770x924.jpg"
                    //
                />
                <div className={s.friendText }>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        Маша
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        Привет, Иван! Как дела?
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                22:20
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
