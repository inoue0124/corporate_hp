'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { companyInfo } from '@/data/company';

export function CompanySection() {
  return (
    <section id="company" className="bg-bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <ScrollReveal>
          <SectionHeading en="Company" ja="会社概要" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-bg-card">
            <table className="w-full">
              <tbody>
                {companyInfo.map((item, i) => (
                  <tr
                    key={item.label}
                    className={i > 0 ? 'border-t border-border' : ''}
                  >
                    <th className="w-1/3 whitespace-nowrap bg-bg-secondary px-6 py-4 text-left text-sm font-medium text-text-secondary">
                      {item.label}
                    </th>
                    <td className="px-6 py-4 text-sm">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
