import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Multiverse Marketing Co.",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
