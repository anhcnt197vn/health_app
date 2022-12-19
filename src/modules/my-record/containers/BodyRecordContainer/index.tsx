import Image from "next/image";

export const BodyRecordContainer = () => {
  return (
    <section>
      <Image
        src="/images/BODY RECORD.png"
        alt="Body Record"
        width={960}
        height={304}
        style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginTop: 56 }}
      />
    </section>
  );
};
