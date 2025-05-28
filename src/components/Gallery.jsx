export function Profile() {
  // name exported
  // This is a named export, which means it must be imported with curly braces
  // For example: import { Profile } from './components/Gallery';
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}
export function Card() {
  // name exported
  // This is a named export, which means it must be imported with curly braces
  // For example: import { Profile } from './components/Gallery';
  return <img src="https://scontent.fdac22-2.fna.fbcdn.net/v/t39.30808-1/494807483_3880763965495391_3265775942659738265_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeESR9fOGVlvfIa1jBlmPdxdqk-TGTSF0eKqT5MZNIXR4llAuIec_bqeSXEw1smb0q7iLZZzPtxQt5VLmw_PjdHG&_nc_ohc=7uzd3IjH9f0Q7kNvwEkRaoo&_nc_oc=AdkvwWskmazyw944pWRTLaDm92pDIa3orduHY2KQooKMzCeXOtYUEGDKtbH1sCjG7Ls&_nc_zt=24&_nc_ht=scontent.fdac22-2.fna&_nc_gid=fWepQVmqmhJW_EPRLAliEw&oh=00_AfLiX23TcFzrNstcuzciLbUcbczeTt60mb38cTiIFtxOAw&oe=683C40DF" alt="imran ali" />;
}

export default function Gallery() {
  // defaul export
  // This is a default export, which means it can be imported without curly braces
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
