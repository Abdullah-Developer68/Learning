import Script from "next/script";

const contact = () => {
  return (
    <div className="container mx-auto p-4">
      <Script>{`alert('Hello from the Contact page!');`}</Script>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700">
        If you have any questions, feel free to reach out!
      </p>
    </div>
  );
};

export default contact;

export const metadata = {
  title: "Contact - Facebook",
  description: "Learn more about Facebook and how to contact us.",
};
