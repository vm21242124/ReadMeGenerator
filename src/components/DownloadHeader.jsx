const DownloadHeader=({markdown})=>{
    const handleDownload = (e) => {
      e.preventDefault();
      const blob = new Blob([markdown], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'README.md'; // File name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };
    return (
      <header >
        <div className="sticky w-12/12 flex justify-between py-4">
      <h1 className='font-bold text-black hover:text-black-900 text-xl'>Readme Creator</h1>
        <button
          onClick={handleDownload}
          className=" px-4 py-2 float-end bg-emerald-500 text-white rounded hover:bg-emerald-600 w-12/12"
          >
          Download Markdown
          </button>
        </div>
      </header>
    )
  }

  export default DownloadHeader