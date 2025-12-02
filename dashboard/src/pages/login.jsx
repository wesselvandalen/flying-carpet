import { useState } from "react";
import logo from "../assets/icon.png";
import { logInUser } from "../service/login-service";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = { username, password };

        try {
            const response = await logInUser(user);

            if (response?.token) {
                sessionStorage.setItem("token", response.token);
                window.open("/dashboard", "_self");
            } else {
                showError("Incorrect username or password");
            }
        } catch (err) {
            showError("Login failed. Please try again.");
        }
    };

    const showError = (message) => {
        setError(message);
        setTimeout(() => {
            setError("");
        }, 3000); // disappear after 3 seconds
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-8 h-8 mr-2" src={logo} alt="Capgemini logo" />
                    Capgemini
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to access the dashboard
                        </h1>

                        {/* Error Message */}
                        {error && (
                            <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded-lg">
                                {error}
                            </div>
                        )}

                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                                    Username
                                </label>
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black border border-gray-300 cursor-pointer hover:bg-gray-100 bg-primary-600 hover:bg-primary-700 focus:ring-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}