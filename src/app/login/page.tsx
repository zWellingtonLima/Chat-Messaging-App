"use client";

import Button from "@/components/ui/Button";
import { FC, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function loginWithGoogle() {

  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            Logo
            <h2 className="mt-6 text-centertext-3xl font-bold tracking-tight text-gray-900">Sign in to you account</h2>
          </div>

          <Button isLoading={isLoading} type="button" className="max-w-sm mx-auto w-full" onClick={loginWithGoogle}>
            
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
