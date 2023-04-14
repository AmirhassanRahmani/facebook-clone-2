import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="grid place-items-center mt-40">
      <Image
        src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
        width={200}
        height={200}
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500
      rounded-full text-white mt-10 text-center cursor-pointer"
      >
        Login With Facebook
      </h1>
    </div>
  );
}

export default Login;
