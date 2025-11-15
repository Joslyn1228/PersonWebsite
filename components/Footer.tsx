export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Personal Portfolio. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

