import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { SelectInputField } from "@/components/SelectInputField";
import {
  BankTransferIcon,
  PayPalIcon,
  VisaIcon,
  MastercardIcon,
} from "@/icons/PaymentIcons";
import { RadioButton } from "@/components/RadioButton";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";
import SettingsLayout from "@/layout/SettingsLayout";

export default function SettingsPayments() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  return (
    <SettingsLayout>
      {isLofi ? (
        <>
          {/* Payment Methods */}
          <div className="border border-black p-5 mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-black">
                Payment Methods
              </h2>
              <Link
                to={ROUTES.ADD_PAYMENT_CARD}
                className="text-xs text-black underline font-medium"
              >
                + Add Card
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { card: "Visa ••••1234", isDefault: true, selected: true },
                {
                  card: "Mastercard ••••5678",
                  isDefault: false,
                  selected: false,
                },
              ].map(item => (
                <div
                  key={item.card}
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
                        {item.card}
                      </p>
                      <div className="mt-0.5">
                        <TextPlaceholder width="100px" />
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

          {/* Withdrawal Methods */}
          <div className="border border-black p-5 mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-black">
                Withdrawal Methods
              </h2>
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
        </>
      ) : (
        <>
          {/* Payment Methods */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-700">
                Payment Methods
              </h2>
              <Link
                to={ROUTES.ADD_PAYMENT_CARD}
                className="text-xs underline font-medium cursor-pointer"
                style={{ color: isHifi ? DS.primary : "#4b5563" }}
              >
                + Add Card
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  card: "Visa ••••1234",
                  expiry: "Expires 08/27",
                  isDefault: true,
                  selected: true,
                  type: "visa",
                },
                {
                  card: "Mastercard ••••5678",
                  expiry: "Expires 03/28",
                  isDefault: false,
                  selected: false,
                  type: "mastercard",
                },
              ].map(item => (
                <div
                  key={item.card}
                  className={`rounded p-4 flex items-center justify-between transition-colors ${item.selected ? "border-2 border-gray-800 bg-gray-50" : "border border-gray-200 hover:border-gray-300"}`}
                >
                  <div className="flex items-center gap-3">
                    <RadioButton selected={item.selected} />
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {isHifi ? (
                        item.type === "visa" ? (
                          <VisaIcon size={28} />
                        ) : (
                          <MastercardIcon size={28} />
                        )
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {item.card}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.expiry}
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

          {/* Withdrawal Methods */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-700">
                Withdrawal Methods
              </h2>
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
        </>
      )}
    </SettingsLayout>
  );
}
