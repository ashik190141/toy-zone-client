import useTitle from "../../TitleHook/TitleHook";


const Blog = () => {
    useTitle("Blog");
    return (
        <div className="w-11/12 mx-auto my-5 p-5 bg-[#2167df62] rounded space-y-5 font-mono">
            <div className="bg-[#fff] p-5 space-y-1 rounded">
                <h1 className="text-xl font-semibold">Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <h2 className="text-xl font-semibold text-blue-600">Answer:</h2>
                <p className="text-base ">An access token is a short-lived credential that allows a client application to access protected resources on behalf of a user. A refresh token is a long-lived credential that can be used to obtain new access tokens without requiring the user to re-authenticate.</p>
                <p>Access tokens are typically stored in the browser local storage or session storage. Refresh tokens are typically stored in the browser localStorage or a secure key-value store.</p>
                <p>Access tokens and refresh tokens should be stored securely to prevent unauthorized access to protected resources.</p>
            </div>
            <div className="bg-[#fff] p-5 space-y-1 rounded">
                <h1 className="text-xl font-semibold">Question: Compare SQL and NoSQL databases?</h1>
                <h2 className="text-xl font-semibold text-blue-600">Answer:</h2>
                <p className="text-base">SQL databases are relational databases that store data in tables. Tables are made up of rows and columns, and each row represents a single record. SQL databases are very efficient at storing and retrieving data, and they are widely used for a variety of applications.</p>
                <p>NoSQL databases are non-relational databases that store data in a variety of formats. NoSQL databases are often used for applications that require high scalability or flexibility.</p>
                <p>The best database for a particular application will depend on the specific requirements of that application.</p>
            </div>
            <div className="bg-[#fff] p-5 space-y-1 rounded">
                <h1 className="text-xl font-semibold">Question: What is express js? What is Nest JS?</h1>
                <h2 className="text-xl font-semibold text-blue-600">Answer:</h2>
                <p className="text-base">Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications. It is easy to learn and use, and it is highly scalable. Express is a popular choice for building web applications of all sizes, from simple websites to complex enterprise applications.</p>
                <p>Nest is a progressive Node.js framework that combines the best of OOP (Object-Oriented Programming) and MVC (Model-View-Controller) to build scalable and maintainable web applications. Nest is built on top of Express, and it provides a number of features that make it easier to build complex applications, such as dependency injection, routing, and authentication. Nest is a popular choice for building web applications that require a high degree of scalability and maintainability.</p>
            </div>
            <div className="bg-[#fff] p-5 space-y-1 rounded">
                <h1 className="text-xl font-semibold">Question: What is MongoDB aggregate and how does it work?</h1>
                <h2 className="text-xl font-semibold text-blue-600">Answer:</h2><p className="text-base">MongoDB aggregate is a feature that allows you to perform complex operations on data in a MongoDB collection. It works by using a pipeline of stages, each of which performs a specific operation on the data. The stages in a pipeline are executed in sequence, and the output of each stage is passed to the next stage.</p><p>Some of the most common aggregate operations are:</p>
                <p className="flex items-center"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg> $match: This stage filters the data in the collection based on a condition.</p><p className="flex items-center"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg> $group: This stage groups the data in the collection by a value and calculates a value for each group.</p><p className="flex items-center"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg> $project: This stage projects the data in the collection to a new format.</p><p className="flex items-center"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg> $sort: This stage sorts the data in the collection.</p><p className="flex items-center"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg> $limit: This stage limits the number of documents returned by the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;