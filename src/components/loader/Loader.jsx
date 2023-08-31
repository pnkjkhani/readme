import loader from '@/../../public/loader.gif'
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

const Loader = () => {
    return (
        <div className={style.container}>
            {/* <div className={style.imgContainer} > */}
                <Image style={{borderRadius:'50%'}} src={loader} width={40} height={40} alt='Loading..' />
            {/* </div> */}
        </div>
    )
}

export default Loader
