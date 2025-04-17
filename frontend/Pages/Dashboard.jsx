import React from "react";
import AddTaskForm from "../Components/AddTaskForm";
import TaskList from "../Components/TaskList";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#152a1f]">Task Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage your tasks and stay organized
          </p>
        </header>

        <AddTaskForm />

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#152a1f] mb-4">
            Your Tasks
          </h2>
          <TaskList />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
