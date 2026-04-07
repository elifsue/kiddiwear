import { ROUTES } from "@/routes";
import { Toaster } from "@/ui/sonner";
import { TooltipProvider } from "@/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { FidelityModeProvider } from "./contexts/FidelityModeContext";
import { DesignSystemProvider } from "./contexts/DesignSystemContext";
import AppShell from "@/tools/AppShell";

import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import VerifyCode from "./screens/VerifyCode";
import ResetPassword from "./screens/ResetPassword";
import Products from "./screens/Products";
import ProductDetailBuy from "./screens/ProductDetailBuy";
import ProductDetailSell from "./screens/ProductDetailSell";
import Profile from "./screens/Profile";
import Followers from "./screens/Followers";
import Followings from "./screens/Followings";
import Notifications from "./screens/Notifications";
import SavedItems from "./screens/SavedItems";
import Wallet from "./screens/Wallet";
import SellerProfile from "./screens/SellerProfile";
import SellerReviews from "./screens/SellerReviews";
import SellItem from "./screens/SellItem";
import EditItem from "./screens/EditItem";
import CreateBundle from "./screens/CreateBundle";
import CheckoutDelivery from "./screens/CheckoutDelivery";
import CheckoutCollection from "./screens/CheckoutCollection";
import OrderConfirmation from "./screens/OrderConfirmation";
import MyPurchases from "./screens/MyPurchases";
import MySales from "./screens/MySales";
import TrackOrder from "./screens/TrackOrder";
import LeaveReview from "./screens/LeaveReview";
import DisputeRequest from "./screens/DisputeRequest";
import DisputeStatus from "./screens/DisputeStatus";
import SettingsProfile from "./screens/SettingsProfile";
import SettingsPayments from "./screens/SettingsPayments";
import SettingsSelling from "./screens/SettingsSelling";
import SettingsNotifications from "./screens/SettingsNotifications";
import SettingsAccount from "./screens/SettingsAccount";
import AddPaymentCard from "./screens/AddPaymentCard";
import AddWithdrawalMethod from "./screens/AddWithdrawalMethod";
import ChangePassword from "./screens/ChangePassword";
import Messages from "./screens/Messages";
import OfferSentPending from "./screens/OfferSentPending";
import OfferSentCancelled from "./screens/OfferSentCancelled";
import OfferSentCounter from "./screens/OfferSentCounter";
import OfferSentAccepted from "./screens/OfferSentAccepted";
import OfferReceivedPending from "./screens/OfferReceivedPending";
import OfferReceivedCounter from "./screens/OfferReceivedCounter";
import OfferReceivedAccepted from "./screens/OfferReceivedAccepted";
import About from "./screens/About";
import HowItWorks from "./screens/HowItWorks";
import BuyerProtection from "./screens/BuyerProtection";
import HelpCentre from "./screens/HelpCentre";
import TermsAndConditions from "./screens/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <AppShell>
      <Switch>
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGNUP} component={SignUp} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route path={ROUTES.VERIFY_CODE} component={VerifyCode} />
        <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
        <Route path={ROUTES.PRODUCTS} component={Products} />
        <Route path={ROUTES.PRODUCT_DETAIL_BUY} component={ProductDetailBuy} />
        <Route
          path={ROUTES.PRODUCT_DETAIL_SELL}
          component={ProductDetailSell}
        />
        <Route path={ROUTES.PROFILE} component={Profile} />
        <Route path={ROUTES.FOLLOWERS} component={Followers} />
        <Route path={ROUTES.FOLLOWINGS} component={Followings} />
        <Route path={ROUTES.NOTIFICATIONS} component={Notifications} />
        <Route path={ROUTES.SAVED_ITEMS} component={SavedItems} />
        <Route path={ROUTES.WALLET} component={Wallet} />
        <Route path={ROUTES.SELLER_PROFILE} component={SellerProfile} />
        <Route path={ROUTES.SELLER_REVIEWS} component={SellerReviews} />
        <Route path={ROUTES.SELL_ITEM} component={SellItem} />
        <Route path={ROUTES.EDIT_ITEM} component={EditItem} />
        <Route path={ROUTES.CREATE_BUNDLE} component={CreateBundle} />
        <Route path={ROUTES.CHECKOUT_DELIVERY} component={CheckoutDelivery} />
        <Route
          path={ROUTES.CHECKOUT_COLLECTION}
          component={CheckoutCollection}
        />
        <Route path={ROUTES.ORDER_CONFIRMATION} component={OrderConfirmation} />
        <Route path={ROUTES.MY_PURCHASES} component={MyPurchases} />
        <Route path={ROUTES.MY_SALES} component={MySales} />
        <Route path={ROUTES.TRACK_ORDER} component={TrackOrder} />
        <Route path={ROUTES.LEAVE_REVIEW} component={LeaveReview} />
        <Route path={ROUTES.DISPUTE} component={DisputeRequest} />
        <Route path={ROUTES.DISPUTE_STATUS} component={DisputeStatus} />
        <Route path={ROUTES.SETTINGS_PROFILE} component={SettingsProfile} />
        <Route path={ROUTES.SETTINGS_PAYMENTS} component={SettingsPayments} />
        <Route path={ROUTES.SETTINGS_SELLING} component={SettingsSelling} />
        <Route
          path={ROUTES.SETTINGS_NOTIFICATIONS}
          component={SettingsNotifications}
        />
        <Route path={ROUTES.SETTINGS_ACCOUNT} component={SettingsAccount} />
        <Route path={ROUTES.ADD_PAYMENT_CARD} component={AddPaymentCard} />
        <Route
          path={ROUTES.ADD_WITHDRAWAL_METHOD}
          component={AddWithdrawalMethod}
        />
        <Route path={ROUTES.CHANGE_PASSWORD} component={ChangePassword} />
        <Route path={ROUTES.MESSAGES} component={Messages} />
        <Route path={ROUTES.OFFER_SENT_PENDING} component={OfferSentPending} />
        <Route
          path={ROUTES.OFFER_SENT_CANCELLED}
          component={OfferSentCancelled}
        />
        <Route path={ROUTES.OFFER_SENT_COUNTER} component={OfferSentCounter} />
        <Route
          path={ROUTES.OFFER_SENT_ACCEPTED}
          component={OfferSentAccepted}
        />
        <Route
          path={ROUTES.OFFER_RECEIVED_PENDING}
          component={OfferReceivedPending}
        />
        <Route
          path={ROUTES.OFFER_RECEIVED_COUNTER}
          component={OfferReceivedCounter}
        />
        <Route
          path={ROUTES.OFFER_RECEIVED_ACCEPTED}
          component={OfferReceivedAccepted}
        />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.HOW_IT_WORKS} component={HowItWorks} />
        <Route path={ROUTES.BUYER_PROTECTION} component={BuyerProtection} />
        <Route path={ROUTES.HELP_CENTRE} component={HelpCentre} />
        <Route path={ROUTES.TERMS} component={TermsAndConditions} />
        <Route path={ROUTES.PRIVACY} component={PrivacyPolicy} />
        <Route>
          <div className="p-12 text-center">
            <h1 className="text-xl font-bold mb-2">Page Not Found</h1>
            <p className="text-sm">This wireframe screen doesn't exist.</p>
          </div>
        </Route>
      </Switch>
    </AppShell>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <DesignSystemProvider>
          <FidelityModeProvider>
            <WouterRouter base={import.meta.env.VITE_BASE_PATH || ""}>
              <TooltipProvider>
                <Toaster />
                <Router />
              </TooltipProvider>
            </WouterRouter>
          </FidelityModeProvider>
        </DesignSystemProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
