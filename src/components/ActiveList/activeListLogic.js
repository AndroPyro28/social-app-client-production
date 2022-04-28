import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import {chatboxToggle} from '../../redux/actions/chatbox'

function activeListLogic({socket, dispatch}) {

    const openChatBox = async (userId) => {

        const res = await axios.get(`https://fullstack-backend-socialapp.herokuapp.com/api/getMessagesByUserId/${userId}`, {
            headers: {
                accesstoken: Cookies.get('userToken')
            }
        })
        dispatch(chatboxToggle(false))
        dispatch(chatboxToggle(true, res.data.chatData))
    }

  return {
    openChatBox
  }
}

export default activeListLogic