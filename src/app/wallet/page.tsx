import WalletBalance from '@/components/WalletBalance'
import WalletGrid from '@/components/WalletGrid'
import LinkedPayments from '@/components/LinkedPayments'
import TransactionHistory from '@/components/TransactionHistory'
import Insights from '@/components/Insights'

export default function WalletPage() {
  return (
    <main>
      <WalletBalance />
     <WalletGrid />
     <LinkedPayments />
     <TransactionHistory />
     <Insights />
    </main>
  )
}
