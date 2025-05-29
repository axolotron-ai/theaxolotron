import { Prompt } from "next/font/google";

const prompt = Prompt({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

export default function Contact() {
    return (
        <div className={prompt.className}>
            <p>Contact us</p>

            <div>
                <p>AI doesn't wait, and neither should your business.</p>
                <input placeholder="Name" />
                <input placeholder="Organization Name" />
                <input placeholder="Email Address" />
                <button>Send</button>
            </div>

            <div>
                <div>
                    <p>Phone no</p>
                    <p>91+8248916635</p>
                    <p>91+6382714477</p>
                </div>
                <div>
                    <p>Email Address</p>
                    <p>axolotron.ai@gmail.com</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>eu ipsum eget dignissim pellentesque in posuere placerat commodo tempor ac faucibus dolor id feugiat nulla.</p>
                </div>
            </div>
        </div>
    );
};
