import { PhoneIcon, AtSymbolIcon, FlagIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { useState } from 'react'
import { useScrollIndicator } from '@/hooks/useScrollIndicator';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: '',
        message: "",
    });

    const { showScrollIndicator } = useScrollIndicator();

    const handleForm = (event) => {
        let name = event.target?.name;
        let val = event.target?.value;;
        setFormData({ ...formData, [name]: val });
    }

    const onSubmit = async () => {
        if ((formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === "")) {
            toast.info('Required fields cannot be empty', { position: "top-center" });
            return;
        }
        try {
            const { name, email, message } = formData;
            const res = await fetch('https://formspree.io/f/xykngkeq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                toast.success('Message send', { position: "top-center" });
                setFormData({ ...formData, name: "", email: '', message: "", });
            } else {
                toast.error('Message not send', { position: "top-center" });
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="wrapper">
                <section className="contact">
                    <div className="min-h-screen flex items-center justify-center relative">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="md:text-[68px] font-bold sm:text-2xl">Contact</h1>
                            <p className="mt-5 fs-13">Home / <span className="text-custom">Contact</span></p>
                        </div>
                        {showScrollIndicator && (
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                                <ChevronDownIcon className="w-8 h-8 text-custom" />
                            </div>
                        )}
                    </div>
                    <div className="mt-10 fs-13 mx-3 md:mx-0" id="contact-info">
                        <span className="title-shadow">CONTACT INFO</span>
                        <div className="flex gap-5 mt-5 flex-col md:flex-row">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2">
                                    <PhoneIcon className="size-5 text-custom" />
                                    Mobile
                                </div>
                                +91 8344 283 430
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2">
                                    <AtSymbolIcon className="size-5 text-custom" />
                                    Email
                                </div>
                                inthrajithvijayan47@gmail.com
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2">
                                    <FlagIcon className="size-5 text-custom" />
                                    Address
                                </div>
                                Vedaranyam(taluk), Nagapattinam(District), Tamil Nadu - 614809
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contactform fs-13 mt-10 mx-3 md:mx-0" id="hire-form">
                    <span className="title-shadow">HIRE ME</span>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <FieldGroup className="mt-5">
                            <Field>
                                <Input placeholder="Name" value={formData.name} name="name" id="name" onChange={(e) => handleForm(e)} />
                            </Field>
                            <Field>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email} name="email" id="email" onChange={(e) => handleForm(e)}
                                />
                            </Field>
                            <Field>
                                <Textarea placeholder="Message" value={formData.message} name="message" id="message" onChange={(e) => handleForm(e)} />
                            </Field>
                            <Field orientation="horizontal">
                                <Button type="submit" className="btn cursor-pointer" onClick={() => onSubmit()}>Send Message</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </section>
            </div>
            <Toaster />
        </>
    )
}

export default Contact