import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Q1:Difference between authorization and authentication ?</h2>
            <p>Ans: Authentication হলো কোন ইউজারকে যাচাই করার প্রক্রিয়া।অন্যদিকে, Authorization হলো কোন ব্যবহারকারীর কোন একটা অ্যপ্লিকেশন বা কোন ডাটাতে access রয়েছে কিনা তা যাচাই করার প্রক্রিয়া।</p>

            <h2>Q2: Why are you using firebase? What other options do you have to implement authentication ?</h2>
            <p>Ans:Firebase  ব্যবহার করার কারণ হলো এটার মাধ্যমে পাসওয়ার্ড, ফোন নাম্বার দিয়ে authentication করা যায়।পাশাপাশি এটা জনপ্রিয় কিছু সাইট যেমন Google, Facebook, Twitter, Git hub  সাপোর্ট করে।Firebase authentication এর Alternative হিসেবে আছে Retina scans,Voice recognition, fingerprint etc. </p>

            <h2>Q3: What other services does firebase provide other than authentication ?</h2>
            <p>Ans:Firebase শুধু Authentication পরিষেবা দেয় না। পাশাপাশি আরো কিছু সুবিধা দিয়ে থাকে। এদের মধ্যে অন্যতম হলোঃ

                1.Hosting.
                2.Cloud Storage.
                3.Cloud messaging.
                4.Cloud Firestore.
                5.Google Analytics etc... </p>
        </div>
    );
};

export default Blog;