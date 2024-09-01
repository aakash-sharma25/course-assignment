import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [render, setRender] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      setRender(true);
    }
  }, []);

  const goToDashboard = ()=>{
    let user = localStorage.getItem("user")
    if(!user) navigate("/login");
    user = JSON.parse(user);
    console.log(user)
    navigate("/dashboard/"+user?.user?._id)
  }

  // if(!localStorage.getItem("user")){
  //     return  <></>;
  // }
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Assignment text */}
        <div className="text-xl font-bold">Assignment</div>

        {/* Right side: Links */}
        {render && (
          <div className="space-x-4">
            <span onClick={() => navigate("/")} className="hover:text-gray-400">
              Home
            </span>
            <span onClick={()=> goToDashboard()} className="hover:text-gray-400">Dashboard</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
