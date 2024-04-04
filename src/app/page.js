import LoginForm from "@/components/LoginForm";
export default function Home() {
  return (
    <main>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 bt-4 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
             <LoginForm title="Sign in to your account" />
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}
