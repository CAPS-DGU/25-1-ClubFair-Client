import {Cookies} from 'react-cookie'

const cookies = new Cookies();

export const setCookie = (name, value, options)=>{

	return cookies.set(name, value, {...options})
}

export const getCookie = (name)=>{
	return cookies.get(name)
}

export const removeCookie = (name)=>{
	return cookies.remove(name, { path: '/'})
}

export const CheckLogin = () => {
    if(getCookie('accessToken') && getCookie('accessToken') !== "undefined"){
      return true;
    }else{
      return false;
    }
}