import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div id='footer-container'>
        <Image
          src={"/svg/logo.svg"}
          width={205}
          height={74}
          alt='오제이음악학원로고'
          id='footer-logo'
        ></Image>
        <ul>
          <li>대표자 : 장지왕 | Email : jiwang917@naver.com</li>
          <li>Tel : 061-659-3892 | Mobile : 010-8880-0495</li>
          <li>주소 : 전라남도 여수시 시청로 1, 여수시청 본청사</li>
        </ul>
      </div>
    </footer>
  );
}
