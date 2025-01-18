import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const loggedInUser = {
  firstName: "Yan",
  lastName: "S",
  email: "yan@voyage.com",
  avatar: "/icons/logo.svg",
}

const Home = () => {
  return (
    <div className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser.firstName || 'Guest'}
            subtext = "Access and Manage your account and transactions"
          />
        </header>

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={10000.35}
          
        />
      </div>
    </div>
  )
}

export default Home