"use client"
import Image from "next/image"
import { useState } from "react";
import Dropdown from "./Dropdown";


const Profile = () => {
  const [isToggled, setIsToggled] = useState(false)


  return (
    <div className="relative">

      <div onClick={() => setIsToggled(prev => !prev)}>
        <Image
          src="/images/logo.png"
          alt="Menu pengguna"
          width={50}
          height={50}
          className="h-12 w-12 cursor-pointer rounded-lg object-cover transition hover:rounded-2xl"
        />
      </div>

      {isToggled && <Dropdown />}


    </div>
  )
}

export default Profile
