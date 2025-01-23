import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
  const loggedInUser = await getLoggedInUser();
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser?.name || 'Guest'}
            subtext = "Access and Manage your account and transactions"
          />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={10000.35}
        />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedInUser} transactions={[]} banks={[{ currentBalance: 10000.35 }, { currentBalance: 100.35}]} />
    </section>
  )
}

export default Home