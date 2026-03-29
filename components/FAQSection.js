'use client'

/**
 * FAQSection — accordion with schema-ready FAQ items.
 * Handles objections in conversion funnels.
 */
export default function FAQSection({ heading, faqs }) {
    if (!faqs || faqs.length === 0) return null

    return (
        <section className="py-20">
            <div className="max-w-2xl mx-auto px-4">
                {heading && (
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                        {heading}
                    </h2>
                )}
                <div className="border-t border-gray-200">
                    {faqs.map((faq) => (
                        <details key={faq.q} className="border-b border-gray-200 group">
                            <summary className="flex items-center justify-between py-5 cursor-pointer font-semibold text-gray-900 list-none">
                                <span>{faq.q}</span>
                                <span className="text-primary text-xl transition-transform duration-200 group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                            </summary>
                            <p className="pb-5 text-muted text-sm leading-relaxed pr-8">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
