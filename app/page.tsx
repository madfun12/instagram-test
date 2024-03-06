const url =
    "https://api.instagram.com/oauth/authorize?client_id=315358287820802&redirect_uri=https://instagram-test-omega.vercel.app/authorization-success/&scope=user_profile,user_media&response_type=code";
export default function Home() {
    return (
        <>
            <a href="url" className="p-4">
                Authorize eSAT
            </a>
        </>
    );
}
