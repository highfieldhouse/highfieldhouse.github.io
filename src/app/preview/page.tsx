import Link from "next/link";
import LayoutClient from "../../components/LayoutClient";

interface PreviewPage {
  title: string;
  path: string;
}

const previewPages: PreviewPage[] = [
  {
    title: "Dark Mode",
    path: "/preview/dark-mode",
  },
  {
    title: "Dark Mode",
    path: "/preview/dark-mode2",
  },
];

export default function PreviewPage() {
  return (
    <LayoutClient>
      {previewPages.map((preview) => (
        <Link
          key={preview.path}
          href={preview.path}
          className="block hover:opacity-80 transition-opacity"
        >
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0" style={{ width: "180px" }}>
              <div
                style={{
                  width: "180px",
                  height: "390px",
                  border: "8px solid #1f2937",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#374151",
                    borderRadius: "2px",
                  }}
                />
                <iframe
                  src={preview.path}
                  style={{
                    width: "375px",
                    height: "812px",
                    border: "none",
                    transform: "scale(0.48)",
                    transformOrigin: "0 0",
                    pointerEvents: "none",
                  }}
                  title={`${preview.title} preview`}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </LayoutClient>
  );
}
