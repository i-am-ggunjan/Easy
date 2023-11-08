import React, { useEffect, useState } from "react";
import axios from "axios";

const PdfViewer = ({ url }) => {
    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        const fetchPdf = async () => {
            const expressApiUrl = `${process.env.NEXT_PUBLIC_LIVE_SERVER_URI}/api/super-admin/progams/getpdf`;
            try {
                const response = await axios.post(
                    expressApiUrl,
                    {
                        pdfURL: url, // Assuming 'url' contains the PDF URL you want to fetch
                    },
                    {
                        responseType: "blob", // Specify that the response data is binary (blob)
                    }
                );

                // Convert the Blob data to a URL
                const pdfBlob = new Blob([response.data], { type: "application/pdf" });
                const pdfUrl = URL.createObjectURL(pdfBlob);

                // Set the PDF URL in the component state
                setPdfUrl(pdfUrl);
            } catch (error) {
                console.error("Error fetching the PDF:", error.message);
                // Handle error here if needed
            }
        };
        fetchPdf();
    }, [url]);

    return (
        <div>
            {pdfUrl ? (
                <embed
                    src={pdfUrl}
                    width="100%"
                    height={"700px"}
                    type="application/pdf"
                />
            ) : (
                <p>Loading PDF...</p>
            )}
        </div>
    );
};

export default PdfViewer;
