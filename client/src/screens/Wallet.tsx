import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { SectionHeader } from "@/components/SectionHeader";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { SelectInputField } from "@/components/SelectInputField";
import { PaginationBar } from "@/components/PaginationBar";
import { RadioButton } from "@/components/RadioButton";
import { PageHeader } from "@/components/PageHeader";
import { BadgeLabel } from "@/components/BadgeLabel";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";
import { BankTransferIcon, PayPalIcon } from "@/icons/PaymentIcons";
import { ChipItem } from "@/components/ChipItem";

export default function Wallet() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <PageHeader
              title="My Wallet"
              backTo={ROUTES.PROFILE}
              className="mb-6"
            />

            {/* Balance Card */}
            <div className="border-2 border-black p-6 mb-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-black mb-1">Available Balance</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-black">
                      &pound;
                    </span>
                    <TextPlaceholder width="120px" className="h-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <ActionButton
                    to={ROUTES.ADD_WITHDRAWAL_METHOD}
                    variant="primary"
                  >
                    Withdraw
                  </ActionButton>
                </div>
              </div>
              <div className="flex gap-6 pt-4 border-t border-black">
                <div>
                  <p className="text-xs text-black mb-1">Pending</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-black">
                      &pound;
                    </span>
                    <TextPlaceholder width="60px" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-black mb-1">Total Earned</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-black">
                      &pound;
                    </span>
                    <TextPlaceholder width="70px" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-black mb-1">Total Withdrawn</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-black">
                      &pound;
                    </span>
                    <TextPlaceholder width="65px" />
                  </div>
                </div>
              </div>
            </div>

            {/* Withdrawal Methods */}
            <div className="mb-5 mt-6">
              <div className="flex items-center justify-between mb-4">
                <SectionHeader noLine noMargin>
                  Withdrawal Methods
                </SectionHeader>
                <Link
                  to={ROUTES.ADD_WITHDRAWAL_METHOD}
                  className="text-xs text-black underline font-medium"
                >
                  + Add Method
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { method: "Bank Account", isDefault: true, selected: true },
                  { method: "PayPal", isDefault: false, selected: false },
                ].map(item => (
                  <div
                    key={item.method}
                    className={`border p-4 flex items-center justify-between ${item.selected ? "border-2 border-black" : "border-black"}`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioButton selected={item.selected} />
                      <div className="w-8 h-8 border border-black bg-white relative flex-shrink-0">
                        <svg
                          viewBox="0 0 40 40"
                          className="absolute inset-0 w-full h-full"
                        >
                          <line
                            x1="0"
                            y1="0"
                            x2="40"
                            y2="40"
                            stroke="black"
                            strokeWidth="0.75"
                          />
                          <line
                            x1="40"
                            y1="0"
                            x2="0"
                            y2="40"
                            stroke="black"
                            strokeWidth="0.75"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black">
                          {item.method}
                        </p>
                        <div className="mt-0.5">
                          <TextPlaceholder width="140px" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.isDefault && (
                        <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5">
                          Default
                        </span>
                      )}
                      <button className="text-xs text-black underline">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction History */}
            <div className="mt-6">
              <SectionHeader>Transaction History</SectionHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {["All", "Sales", "Withdrawals", "Refunds"].map((tab, i) => (
                    <ChipItem key={tab} active={i === 0}>
                      {tab}
                    </ChipItem>
                  ))}
                </div>
                <SelectInputField placeholder="Last 30 days" />
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { type: "Sale", positive: true },
                  { type: "Withdrawal", positive: false },
                  { type: "Sale", positive: true },
                  { type: "Refund", positive: false },
                  { type: "Sale", positive: true },
                  { type: "Sale", positive: true },
                ].map((tx, i) => (
                  <div
                    key={i}
                    className="border border-black p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-black">
                          {tx.positive ? "+" : "−"}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-black">
                            {tx.type}
                          </p>
                          <BadgeLabel
                            variant={
                              tx.type === "Withdrawal"
                                ? "neutral"
                                : tx.type === "Refund"
                                  ? "negative"
                                  : "positive"
                            }
                          >
                            {tx.type === "Withdrawal"
                              ? "Completed"
                              : tx.type === "Refund"
                                ? "Processed"
                                : "Received"}
                          </BadgeLabel>
                        </div>
                        <TextPlaceholder width="120px" />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-black">
                        {tx.positive ? "+" : "−"} &pound;
                        <TextPlaceholder
                          width="40px"
                          className="inline-block"
                        />
                      </p>
                      <TextPlaceholder width="70px" />
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <PaginationBar pages={[1, 2, 3, 4]} />
            </div>

            {/* Generate Income Report */}
            <div className="border border-black p-4 mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-black bg-white relative flex-shrink-0">
                  <svg
                    viewBox="0 0 40 40"
                    className="absolute inset-0 w-full h-full"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="40"
                      y2="40"
                      stroke="black"
                      strokeWidth="0.75"
                    />
                    <line
                      x1="40"
                      y1="0"
                      x2="0"
                      y2="40"
                      stroke="black"
                      strokeWidth="0.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-black">
                    Generate Income Report
                  </p>
                  <TextPlaceholder width="180px" />
                </div>
              </div>
              <ActionButton variant="outlined">Generate</ActionButton>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Detailed (Mid-Fi) ── */
  return (
    <div
      data-midfi={!isHifi || undefined}
      data-hifi={isHifi || undefined}
      className="flex flex-col min-h-[900px]"
    >
      <NavigationBar />
      <div className="px-6 py-6 flex-1">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <PageHeader
            title="My Wallet"
            backTo={ROUTES.PROFILE}
            className="mb-6"
          />

          {/* Balance Card */}
          <div
            className="border border-gray-200 rounded-lg p-6 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Available Balance</p>
                <p className="text-3xl font-bold text-gray-800">
                  &pound;142.50
                </p>
              </div>
              <div className="flex gap-2">
                <ActionButton
                  to={ROUTES.ADD_WITHDRAWAL_METHOD}
                  variant="primary"
                >
                  Withdraw Funds
                </ActionButton>
              </div>
            </div>
            <div className="flex gap-8 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Pending</p>
                <p className="text-sm font-semibold text-gray-700">
                  &pound;12.00
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Total Earned</p>
                <p className="text-sm font-semibold text-gray-700">
                  &pound;684.50
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Total Withdrawn</p>
                <p className="text-sm font-semibold text-gray-700">
                  &pound;530.00
                </p>
              </div>
            </div>
          </div>

          {/* Withdrawal Methods */}
          <div className="mb-5 mt-8">
            <div className="flex items-center justify-between mb-4">
              <SectionHeader noLine noMargin>
                Withdrawal Methods
              </SectionHeader>
              <Link
                to={ROUTES.ADD_WITHDRAWAL_METHOD}
                className="text-xs underline font-medium"
                style={{ color: isHifi ? DS.primary : "#4b5563" }}
              >
                + Add Method
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  method: "Bank Account",
                  detail: "Barclays ••••4821",
                  icon: "bank",
                  isDefault: true,
                  selected: true,
                },
                {
                  method: "PayPal",
                  detail: "jane@example.com",
                  icon: "paypal",
                  isDefault: false,
                  selected: false,
                },
              ].map(item => (
                <div
                  key={item.method}
                  className={`rounded p-4 flex items-center justify-between transition-colors ${item.selected ? "border-2 border-gray-800 bg-gray-50" : "border border-gray-200 hover:border-gray-300"}`}
                  style={{
                    background: isHifi ? DS.surfaceContainerLowest : undefined,
                    borderColor: isHifi
                      ? item.selected
                        ? DS.primary
                        : DS.outlineVariant
                      : undefined,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <RadioButton selected={item.selected} />
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {isHifi ? (
                        item.icon === "bank" ? (
                          <BankTransferIcon size={28} />
                        ) : (
                          <PayPalIcon size={28} />
                        )
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {item.method}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.isDefault && (
                      <span className="text-[10px] font-medium text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">
                        Default
                      </span>
                    )}
                    <button className="text-xs text-gray-400 underline hover:text-gray-600">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History */}
          <div className="mt-8">
            <SectionHeader>Transaction History</SectionHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {["All", "Sales", "Withdrawals", "Refunds"].map((tab, i) => (
                  <ChipItem key={tab} active={i === 0}>
                    {tab}
                  </ChipItem>
                ))}
              </div>
              <SelectInputField placeholder="Last 30 days" />
            </div>
            <div className="flex flex-col gap-2">
              {[
                {
                  type: "Sale",
                  desc: "Baby Gap Romper Set",
                  amount: "+£12.00",
                  date: "2 Apr 2026",
                  status: "Received",
                  positive: true,
                },
                {
                  type: "Withdrawal",
                  desc: "To Barclays ••••4821",
                  amount: "−£50.00",
                  date: "28 Mar 2026",
                  status: "Completed",
                  positive: false,
                },
                {
                  type: "Sale",
                  desc: "Next Kids Jacket (4 years / 104 cm)",
                  amount: "+£18.50",
                  date: "25 Mar 2026",
                  status: "Received",
                  positive: true,
                },
                {
                  type: "Refund",
                  desc: "Buyer dispute — M&S Dress",
                  amount: "−£8.00",
                  date: "22 Mar 2026",
                  status: "Processed",
                  positive: false,
                },
                {
                  type: "Sale",
                  desc: "Clarks First Shoes (3 years / 98–103 cm)",
                  amount: "+£15.00",
                  date: "20 Mar 2026",
                  status: "Received",
                  positive: true,
                },
                {
                  type: "Sale",
                  desc: "John Lewis Snowsuit 6-9m",
                  amount: "+£22.00",
                  date: "18 Mar 2026",
                  status: "Received",
                  positive: true,
                },
              ].map((tx, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded p-4 flex items-center justify-between hover:border-gray-300 transition-colors"
                  style={{
                    background: isHifi ? DS.surfaceContainerLowest : undefined,
                    borderColor: isHifi ? DS.outlineVariant : undefined,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 border border-gray-200">
                      <span className="text-xs font-bold text-gray-500">
                        {tx.positive ? "+" : "−"}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-700">
                          {tx.type}
                        </p>
                        <BadgeLabel
                          variant={
                            tx.status === "Received"
                              ? "positive"
                              : tx.status === "Processed"
                                ? "negative"
                                : "neutral"
                          }
                        >
                          {tx.status}
                        </BadgeLabel>
                      </div>
                      <p className="text-xs text-gray-400">{tx.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-700">
                      {tx.amount}
                    </p>
                    <p className="text-xs text-gray-400">{tx.date}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <PaginationBar pages={[1, 2, 3, 4]} />
          </div>

          {/* Generate Income Report */}
          <div
            className="border border-gray-200 rounded-lg p-4 mt-8 flex items-center justify-between hover:border-gray-300 transition-colors"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                {isHifi ? (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gray-600"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                ) : (
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Generate Income Report
                </p>
                <p className="text-xs text-gray-400">
                  Download a summary of your earnings for tax or personal
                  records.
                </p>
              </div>
            </div>
            <ActionButton variant="outlined">Generate</ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
