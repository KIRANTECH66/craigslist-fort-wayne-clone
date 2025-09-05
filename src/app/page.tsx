export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] text-[#454859]">
      <header className="border-b border-[#cad1d0] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="text-xl font-semibold text-[#454859]">CL</a>
            <span className="text-sm text-[#7c7c7c]">fort wayne</span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a className="text-[#454859] hover:underline" href="#">post</a>
            <a className="text-[#454859] hover:underline" href="#">account</a>
            <a className="text-[#454859] hover:underline" href="#">favorites (0)</a>
            <a className="text-[#454859] hover:underline" href="#">hidden</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left sidebar */}
          <aside className="col-span-12 md:col-span-3 order-2 md:order-1">
            <div className="rounded border border-[#cad1d0] bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-semibold text-sm">event calendar</h3>
              <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#7c7c7c]">
                {"SMTWTFS".split("").map((d, idx) => (
                  <div key={`${d}-${idx}`} className="py-1">{d}</div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <a
                    key={i}
                    href="#"
                    className="rounded py-1 hover:bg-[color(display-p3_0_0.91_0.56)] hover:text-[#454859]"
                  >
                    {i + 1}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded border border-[#cad1d0] bg-white p-4 shadow-sm">
              <ul className="space-y-2 text-sm">
                <li><a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">help, faq, abuse, legal</a></li>
                <li><a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">avoid scams & fraud</a></li>
                <li><a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">personal safety tips</a></li>
                <li><a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">about craigslist</a></li>
                <li><a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">best-of-craigslist</a></li>
                <li><a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">craigslist is hiring</a></li>
                <li><a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">what's new</a></li>
                <li><a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">system status</a></li>
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <div className="mb-6 rounded border border-[#cad1d0] bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <input
                  className="w-full rounded border border-[#cad1d0] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:oklch(var(--ring))] shadow-sm"
                  placeholder="Search anything in Fort Wayne…"
                  aria-label="Search Craigslist Fort Wayne"
                />
                <button className="mt-2 md:mt-0 rounded bg-[oklch(var(--primary))] px-4 py-2 text-sm font-medium text-white hover:brightness-95 active:brightness-90 shadow-sm" aria-label="Search">search</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
              {[
                { title: "community", items: ["activities","artists","childcare","classes","events","general","groups","localnews","lost+found","missed connections","musicians","pets","politics","rants & raves","rideshare","volunteers"] },
                { title: "services", items: ["automotive","beauty","cell/mobile","computer","creative","cycle","event","farm+garden","financial","health/well","household","labor/move","legal","lessons","marine","pet","real estate","skilled trade","sm biz ads","travel/vac","write/ed/tran"] },
                { title: "housing", items: ["apts / housing","housing swap","housing wanted","office / commercial","parking / storage","real estate for sale","rooms / shared","rooms wanted","sublets / temporary","vacation rentals"] },
                { title: "for sale", items: ["antiques","appliances","arts+crafts","atv/utv/sno","auto parts","aviation","baby+kid","barter","beauty+hlth","bike parts","bikes","boat parts","boats","books","business","cars+trucks","cds/dvd/vhs","cell phones","clothes+acc","collectibles","computer parts","computers","electronics","farm+garden","free","furniture","garage sale","general","heavy equip","household","jewelry","materials","motorcycle parts","motorcycles","music instr","photo+video","rvs+camp","sporting","tickets","tools","toys+games","trailers","video gaming","wanted","wheels+tires"] },
                { title: "jobs", items: ["accounting+finance","admin / office","arch / engineering","art / media / design","biotech / science","business / mgmt","customer service","education","etc / misc","food / bev / hosp","general labor","government","human resources","legal / paralegal","manufacturing","marketing / pr / ad","medical / health","nonprofit sector","real estate","retail / wholesale","sales / biz dev","salon / spa / fitness","security","skilled trade / craft","software / qa / dba","systems / network","technical support","transport","tv / film / video","web / info design","writing / editing"] },
                { title: "gigs", items: ["computer","creative","crew","domestic","event","labor","talent","writing"] },
                { title: "resumes", items: [] },
              ].map((section) => (
                <section key={section.title} className="rounded border border-[#cad1d0] bg-white p-4 shadow-sm">
                  <h3 className="mb-3 text-base font-semibold text-[#454859]">
                    <a href="#" className="hover:text-[oklch(var(--primary))] hover:underline">{section.title}</a>
                  </h3>
                  <ul className="columns-2 gap-3 text-sm">
                    {section.items.length === 0 ? (
                      <li className="text-[#7c7c7c]">browse resumes</li>
                    ) : (
                      section.items.map((item) => (
                        <li key={item} className="break-inside-avoid py-0.5">
                          <a href="#" className="hover:text-[oklch(var(--primary))] hover:underline">{item}</a>
                        </li>
                      ))
                    )}
                  </ul>
                </section>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="col-span-12 md:col-span-3 order-3">
            <div className="rounded border border-[#cad1d0] bg-white p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-sm">nearby cl</h4>
              <ul className="mb-4 columns-2 gap-3 text-sm">
                {["ann arbor","battle creek","bloomington","chicago","cincinnati","columbus","dayton","detroit","flint","grand rapids","holland","indianapolis","jackson","kalamazoo","kokomo","lansing","lima-findlay","mansfield","monroe","muncie","muskegon","richmond","saginaw","sandusky","south bend","southwest mi","terre haute","tippecanoe","toledo"].map((c) => (
                  <li key={c} className="break-inside-avoid py-0.5"><a href="#" className="hover:text-[oklch(var(--primary))] hover:underline">{c}</a></li>
                ))}
              </ul>
              <h4 className="mb-2 mt-4 font-semibold text-sm">us cities</h4>
              <ul className="columns-2 gap-3 text-sm">
                {["atlanta","austin","boston","chicago","dallas","denver","detroit","houston","las vegas","los angeles","miami","minneapolis","new york","orange co","philadelphia","phoenix","portland","raleigh","sacramento","san diego","seattle","sf bay area","wash dc"].map((c) => (
                  <li key={c} className="break-inside-avoid py-0.5"><a href="#" className="hover:text-[oklch(var(--primary))] hover:underline">{c}</a></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-[#cad1d0] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[#7c7c7c]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">craigslist charitable</a>
            <a className="hover:text-[oklch(var(--primary))] hover:underline" href="#">craig newmark philanthropies</a>
            <span className="ml-auto">© craigslist clone</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
