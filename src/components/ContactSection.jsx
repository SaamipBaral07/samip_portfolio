import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter,Send } from "lucide-react"
import { cn } from "@/lib/utils";
export const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setTimeout(() => {
            alert("Message sent successfully!");
            e.target.reset(); // Reset the form after submission

        }, 1500); // Simulate a delay for demonstration
    };
return <section id="contact"className="py-24 px-4 relative bg-secondary/30">
   <div className="container mx-auto max-w-5xl">
     <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get In <span className="text-primary">Touch</span>
    </h2>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new ideas, projects, or opportunities.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary"/></div>
                    <div>
                        <h4 className="font-medium">
                            Email
                        </h4>
                        <a href="mailto:baralsamip4@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">baralsamip4@gmail.com</a>
                    </div>


                </div>

                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary"/></div>
                    <div>
                        <h4 className="font-medium">
                            Phone
                        </h4>
                        <a href="tel:+9779846922543" className="text-muted-foreground hover:text-primary transition-colors">+977-9846922543</a>
                    </div>


                </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary"/></div>
                    <div>
                        <h4 className="font-medium">
                            Location
                        </h4>
                        <a className="text-muted-foreground hover:text-primary transition-colors">Pokhara,Nepal</a>
                    </div>
                </div>

            </div>
            <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                    <a href="https://www.linkedin.com/in/samip-baral-9191b52bb" target="_blank"><Linkedin/></a>
                    <a href="https://www.facebook.com/Samip.Baralcr7/" target="_blank"><Facebook/></a>
                    <a href="https://www.instagram.com/saamip07/" target="_blank"><Instagram/></a>
                    <a href="#Twitter"><Twitter/></a>

                </div>
            </div>

        </div>
        <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium ">Your Name</label>
                    <input type="text" id="name" name="name" 
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your Name" required />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your Email</label>
                    <input type="email" id="email" name="email" 
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="john@gmail.com" required />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your Message</label>
                    <textarea id="message" name="message" 
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about ..." required />
                </div>
                <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                    "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors")}>

                    <Send size={16} />
                    Send Message    
                </button>

            </form>

             
        </div>

    </div>
    </div> 
   
</section>
}