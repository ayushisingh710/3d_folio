import Image from "next/image";
import bg from "../../../../public/background/contact.jpg";
import Form from "@/components/contact/Form";
export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:*:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Summon the Wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            lorem Ipsum is Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, whenFeel free to contact me for any
            questions orFeel free to contact me through any of these I am a
            software developer with experience in web development, mobile
            application development and cloud computing.
          </p>
        </div>
      </article>
      <Form />
    </>
  );
}
