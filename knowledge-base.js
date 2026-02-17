/* ============================================
   Girls In Crypto — Knowledge Base Data
   ============================================ */

const CATEGORIES = [
  { id: 'crypto-basics', name: 'Crypto Basics', icon: '&#x1F4B0;', description: 'Start here — learn the fundamentals of cryptocurrency.' },
  { id: 'blockchain', name: 'Blockchain', icon: '&#x1F517;', description: 'Understand the technology powering crypto.' },
  { id: 'defi', name: 'DeFi', icon: '&#x1F3E6;', description: 'Explore decentralized finance and its possibilities.' },
  { id: 'nfts', name: 'NFTs', icon: '&#x1F5BC;', description: 'Digital ownership, art, and collectibles.' },
  { id: 'trading', name: 'Trading', icon: '&#x1F4C8;', description: 'Learn to navigate the crypto markets.' },
  { id: 'security', name: 'Security', icon: '&#x1F512;', description: 'Protect yourself and your assets.' },
  { id: 'wallets', name: 'Wallets', icon: '&#x1F45B;', description: 'Store and manage your cryptocurrency.' }
];

const ARTICLES = [
  // ========== CRYPTO BASICS ==========
  {
    id: 'what-is-cryptocurrency',
    title: 'What Is Cryptocurrency? A Beginner\'s Guide',
    description: 'Everything you need to know about digital currency — what it is, how it works, and why it matters.',
    category: 'crypto-basics',
    level: 'beginner',
    readTime: '8 min read',
    icon: '&#x1F4B0;',
    featured: true,
    content: `
      <h2>What Exactly Is Cryptocurrency?</h2>
      <p>Cryptocurrency is a type of digital money that exists only on the internet. Unlike traditional currencies like the dollar or euro, cryptocurrency isn't controlled by any government or bank. Instead, it uses technology called <strong>blockchain</strong> to record and verify transactions.</p>
      <p>Think of it like this: when you send money through your bank, the bank acts as a middleman — verifying you have the funds and processing the transfer. With cryptocurrency, that verification happens through a network of computers around the world, removing the need for a middleman.</p>

      <h2>How Does It Work?</h2>
      <p>At its core, cryptocurrency works through three key concepts:</p>
      <ul>
        <li><strong>Decentralization</strong> — No single entity controls the network. Instead, thousands of computers (called nodes) work together to maintain it.</li>
        <li><strong>Cryptography</strong> — Advanced math secures transactions and controls the creation of new units, making it extremely difficult to counterfeit.</li>
        <li><strong>Blockchain</strong> — Every transaction is recorded on a public ledger that anyone can view but no one can alter.</li>
      </ul>

      <h2>Popular Cryptocurrencies</h2>
      <p>While there are thousands of cryptocurrencies, here are the most well-known:</p>
      <ul>
        <li><strong>Bitcoin (BTC)</strong> — The first and most valuable cryptocurrency, created in 2009.</li>
        <li><strong>Ethereum (ETH)</strong> — A platform that enables smart contracts and decentralized applications.</li>
        <li><strong>Stablecoins (USDC, USDT)</strong> — Cryptocurrencies designed to maintain a stable value, usually pegged to the US dollar.</li>
      </ul>

      <div class="callout">
        <p><strong>Key Takeaway:</strong> Cryptocurrency is digital money that uses blockchain technology to operate without banks or governments. It's secured by cryptography and maintained by a global network of computers.</p>
      </div>

      <h2>Why Should You Care?</h2>
      <p>Cryptocurrency represents a fundamental shift in how money and value can move around the world. It offers potential benefits like faster international transfers, financial access for the unbanked, and new investment opportunities. Understanding it now puts you ahead of the curve as this technology continues to grow and evolve.</p>
    `
  },
  {
    id: 'how-to-buy-crypto',
    title: 'How to Buy Your First Cryptocurrency',
    description: 'A step-by-step guide to purchasing cryptocurrency safely and confidently.',
    category: 'crypto-basics',
    level: 'beginner',
    readTime: '10 min read',
    icon: '&#x1F6D2;',
    featured: true,
    content: `
      <h2>Before You Buy: What You Need</h2>
      <p>Before purchasing your first cryptocurrency, you'll need a few things:</p>
      <ul>
        <li>A valid government-issued ID (for identity verification)</li>
        <li>A bank account or debit card for payment</li>
        <li>An email address and phone number</li>
        <li>A basic understanding of what you want to buy and why</li>
      </ul>

      <h2>Step 1: Choose a Cryptocurrency Exchange</h2>
      <p>An exchange is a platform where you can buy, sell, and trade cryptocurrency. Popular beginner-friendly exchanges include Coinbase, Kraken, and Gemini. When choosing, look for:</p>
      <ul>
        <li>Strong security features and insurance</li>
        <li>Easy-to-use interface</li>
        <li>Reasonable fees</li>
        <li>Good customer support</li>
      </ul>

      <h2>Step 2: Create and Verify Your Account</h2>
      <p>Sign up with your email and create a strong, unique password. Most exchanges require identity verification (called KYC — Know Your Customer), which involves uploading a photo of your ID. This is a standard security measure.</p>

      <h2>Step 3: Add a Payment Method</h2>
      <p>Connect your bank account or debit card. Bank transfers usually have lower fees but take longer, while debit cards offer instant purchases at slightly higher fees.</p>

      <h2>Step 4: Make Your First Purchase</h2>
      <p>Start small — you don't need to buy a whole Bitcoin! Most exchanges let you purchase fractions of a cryptocurrency. Even $10 or $25 is a perfectly fine starting point to learn the ropes.</p>

      <div class="callout">
        <p><strong>Pro Tip:</strong> Never invest more than you can afford to lose. Cryptocurrency prices can be volatile, so start small and only increase your investment as you learn more and become comfortable.</p>
      </div>

      <h2>Step 5: Secure Your Investment</h2>
      <p>Once you've made your purchase, consider moving your crypto to a personal wallet for added security. We have a dedicated guide on wallets if you want to learn more about this step.</p>
    `
  },
  {
    id: 'understanding-crypto-wallets',
    title: 'Understanding Crypto Wallets',
    description: 'Learn what crypto wallets are, the different types, and how to choose the right one for you.',
    category: 'crypto-basics',
    level: 'beginner',
    readTime: '7 min read',
    icon: '&#x1F45B;',
    content: `
      <h2>What Is a Crypto Wallet?</h2>
      <p>A crypto wallet is a tool that lets you store, send, and receive cryptocurrency. Despite the name, wallets don't actually "hold" your crypto — your assets live on the blockchain. Instead, wallets store your <strong>private keys</strong>, which are like passwords that prove you own your crypto and let you access it.</p>

      <h2>Types of Wallets</h2>
      <p>There are several types of wallets, each with different trade-offs between convenience and security:</p>
      <ul>
        <li><strong>Hot Wallets</strong> — Connected to the internet. Convenient for frequent transactions. Examples: MetaMask, Trust Wallet, Coinbase Wallet.</li>
        <li><strong>Cold Wallets</strong> — Offline storage. More secure for long-term holding. Examples: Ledger, Trezor (hardware devices).</li>
        <li><strong>Exchange Wallets</strong> — Built into exchanges like Coinbase. Easy to use but you don't fully control your keys.</li>
      </ul>

      <div class="callout">
        <p><strong>Remember:</strong> "Not your keys, not your crypto." When you leave crypto on an exchange, you're trusting that company to keep it safe. For maximum security, use a wallet where you control the private keys.</p>
      </div>

      <h2>How to Choose a Wallet</h2>
      <p>Consider these factors:</p>
      <ul>
        <li><strong>Security level</strong> — How much crypto are you storing? Higher amounts warrant more secure (cold) storage.</li>
        <li><strong>Ease of use</strong> — If you're a beginner, start with a user-friendly hot wallet.</li>
        <li><strong>Supported coins</strong> — Make sure the wallet supports the cryptocurrencies you want to store.</li>
        <li><strong>Backup options</strong> — Always choose a wallet that provides a recovery seed phrase.</li>
      </ul>
    `
  },

  // ========== BLOCKCHAIN ==========
  {
    id: 'what-is-blockchain',
    title: 'What Is Blockchain Technology?',
    description: 'Understand the revolutionary technology behind cryptocurrency and its real-world applications.',
    category: 'blockchain',
    level: 'beginner',
    readTime: '9 min read',
    icon: '&#x1F517;',
    featured: true,
    content: `
      <h2>Blockchain in Simple Terms</h2>
      <p>Imagine a notebook that thousands of people share. Every time someone writes a new entry, everyone gets an identical copy. No single person can erase or change past entries, because everyone else's copies would show the difference. That's essentially what a blockchain is — a shared, tamper-proof record of transactions.</p>

      <h2>How Blockchain Works</h2>
      <p>Here's a simplified breakdown:</p>
      <ul>
        <li><strong>Transactions</strong> are grouped together into "blocks"</li>
        <li>Each block is linked (or "chained") to the previous one using cryptography</li>
        <li>Thousands of computers (nodes) verify each new block</li>
        <li>Once verified, the block is permanently added to the chain</li>
        <li>The entire history is visible to anyone on the network</li>
      </ul>

      <h2>Why Blockchain Matters</h2>
      <p>Blockchain solves a fundamental problem in digital transactions: trust. Before blockchain, digital transactions required a trusted intermediary (like a bank) to ensure people couldn't "double-spend" their money. Blockchain removes that need by creating a transparent, verifiable record that no single party controls.</p>

      <div class="callout">
        <p><strong>Beyond Crypto:</strong> Blockchain technology is being used in supply chain management, voting systems, healthcare records, real estate, and many other fields where transparency and trust matter.</p>
      </div>

      <h2>Key Properties of Blockchain</h2>
      <ul>
        <li><strong>Immutable</strong> — Once data is recorded, it can't be changed</li>
        <li><strong>Transparent</strong> — Anyone can view the transaction history</li>
        <li><strong>Decentralized</strong> — No single point of failure or control</li>
        <li><strong>Secure</strong> — Protected by advanced cryptography</li>
      </ul>
    `
  },
  {
    id: 'smart-contracts-explained',
    title: 'Smart Contracts Explained',
    description: 'What are smart contracts, how do they work, and why are they changing the way we do business?',
    category: 'blockchain',
    level: 'intermediate',
    readTime: '8 min read',
    icon: '&#x1F4DD;',
    content: `
      <h2>What Is a Smart Contract?</h2>
      <p>A smart contract is a program stored on a blockchain that automatically executes when certain conditions are met. Think of it as a digital agreement that enforces itself — no lawyers, no middlemen, no waiting.</p>
      <p>For example, imagine a freelance contract that automatically pays you once your work is submitted and approved. That's the idea behind smart contracts.</p>

      <h2>How Smart Contracts Work</h2>
      <p>Smart contracts follow simple "if/then" logic:</p>
      <ul>
        <li><strong>IF</strong> condition A is met, <strong>THEN</strong> execute action B</li>
        <li>The contract is stored on the blockchain, making it transparent and tamper-proof</li>
        <li>Once deployed, the contract runs exactly as programmed — no one can alter it</li>
        <li>All parties can verify the terms and outcomes on the blockchain</li>
      </ul>

      <h2>Real-World Uses</h2>
      <ul>
        <li><strong>DeFi</strong> — Lending, borrowing, and trading without banks</li>
        <li><strong>NFTs</strong> — Proving digital ownership and automating royalties</li>
        <li><strong>Insurance</strong> — Automatic claim payouts when conditions are verified</li>
        <li><strong>Supply Chain</strong> — Tracking goods and automating payments</li>
      </ul>

      <div class="callout">
        <p><strong>Good to Know:</strong> Ethereum was the first blockchain to support smart contracts, which is why it's often called a "programmable blockchain." Many other blockchains now support them too, including Solana, Avalanche, and Polygon.</p>
      </div>
    `
  },
  {
    id: 'layer-1-vs-layer-2',
    title: 'Layer 1 vs Layer 2: What\'s the Difference?',
    description: 'Understanding blockchain layers and why they matter for speed, cost, and scalability.',
    category: 'blockchain',
    level: 'intermediate',
    readTime: '7 min read',
    icon: '&#x1F4CA;',
    content: `
      <h2>The Scalability Challenge</h2>
      <p>As more people use blockchain networks, these networks can become slow and expensive. Imagine a single-lane road handling rush-hour traffic — that's what happens to blockchains when demand spikes. "Layer" solutions address this scalability problem.</p>

      <h2>What Is Layer 1?</h2>
      <p>Layer 1 refers to the base blockchain itself — the main network. Examples include:</p>
      <ul>
        <li><strong>Bitcoin</strong> — The original blockchain</li>
        <li><strong>Ethereum</strong> — The leading smart contract platform</li>
        <li><strong>Solana</strong> — A high-speed blockchain</li>
      </ul>
      <p>Layer 1 solutions improve the base blockchain itself, such as increasing block size or changing the consensus mechanism.</p>

      <h2>What Is Layer 2?</h2>
      <p>Layer 2 solutions are built on top of Layer 1 blockchains to improve their speed and reduce costs. They process transactions off the main chain and then settle the results back to Layer 1.</p>
      <ul>
        <li><strong>Lightning Network</strong> — Built on Bitcoin for faster payments</li>
        <li><strong>Arbitrum &amp; Optimism</strong> — Built on Ethereum for cheaper transactions</li>
        <li><strong>Polygon</strong> — An Ethereum scaling solution</li>
      </ul>

      <div class="callout">
        <p><strong>Simple Analogy:</strong> Think of Layer 1 as a highway and Layer 2 as an express lane or parallel road. The express lane handles overflow traffic and periodically merges back onto the main highway.</p>
      </div>
    `
  },

  // ========== DeFi ==========
  {
    id: 'intro-to-defi',
    title: 'Introduction to DeFi (Decentralized Finance)',
    description: 'Discover how DeFi is creating an open, permissionless financial system for everyone.',
    category: 'defi',
    level: 'beginner',
    readTime: '9 min read',
    icon: '&#x1F3E6;',
    featured: true,
    content: `
      <h2>What Is DeFi?</h2>
      <p>DeFi stands for Decentralized Finance — a collection of financial services built on blockchain technology that operate without traditional banks or financial institutions. Think of it as rebuilding the banking system on the internet, where anyone can participate.</p>

      <h2>How DeFi Works</h2>
      <p>DeFi applications run on smart contracts, which are self-executing programs on the blockchain. This means:</p>
      <ul>
        <li>No bank approval needed to access services</li>
        <li>Available 24/7, 365 days a year (no "banking hours")</li>
        <li>Open to anyone with an internet connection</li>
        <li>Transparent — you can verify how everything works</li>
      </ul>

      <h2>What Can You Do with DeFi?</h2>
      <ul>
        <li><strong>Lending &amp; Borrowing</strong> — Earn interest by lending your crypto, or borrow against it</li>
        <li><strong>Trading</strong> — Swap tokens without a centralized exchange</li>
        <li><strong>Earning Yield</strong> — Earn rewards by providing liquidity to protocols</li>
        <li><strong>Stablecoins</strong> — Use dollar-pegged tokens for stability</li>
      </ul>

      <div class="callout">
        <p><strong>Important:</strong> DeFi is exciting but comes with risks, including smart contract bugs, market volatility, and scams. Always research thoroughly before using any DeFi protocol, and never invest more than you can afford to lose.</p>
      </div>

      <h2>Getting Started with DeFi</h2>
      <p>To use DeFi, you'll need a crypto wallet (like MetaMask), some cryptocurrency (usually Ethereum or stablecoins), and a willingness to learn. Start by exploring well-established protocols and always begin with small amounts.</p>
    `
  },
  {
    id: 'yield-farming-basics',
    title: 'Yield Farming Basics',
    description: 'Learn what yield farming is, how it works, and the risks involved.',
    category: 'defi',
    level: 'intermediate',
    readTime: '8 min read',
    icon: '&#x1F33E;',
    content: `
      <h2>What Is Yield Farming?</h2>
      <p>Yield farming is a way to earn rewards by putting your cryptocurrency to work in DeFi protocols. By depositing (or "staking") your crypto into a protocol, you earn interest or rewards — similar to how a savings account works at a bank, but often with much higher returns.</p>

      <h2>How Yield Farming Works</h2>
      <p>The basic process involves:</p>
      <ul>
        <li>Depositing your crypto into a DeFi protocol's smart contract</li>
        <li>The protocol uses your deposit to facilitate services (like lending or trading)</li>
        <li>In return, you earn rewards — usually in the form of more cryptocurrency</li>
        <li>Rewards are often quoted as APY (Annual Percentage Yield)</li>
      </ul>

      <h2>Common Yield Farming Strategies</h2>
      <ul>
        <li><strong>Liquidity Providing</strong> — Deposit token pairs into decentralized exchanges</li>
        <li><strong>Lending</strong> — Lend your crypto on platforms like Aave or Compound</li>
        <li><strong>Staking</strong> — Lock up tokens to help secure a network</li>
      </ul>

      <div class="callout">
        <p><strong>Risk Warning:</strong> Higher yields often come with higher risks. Be aware of impermanent loss, smart contract risks, and the possibility that token rewards could decrease in value. Always do your own research before yield farming.</p>
      </div>
    `
  },
  {
    id: 'liquidity-pools',
    title: 'Liquidity Pools Explained',
    description: 'Understand how liquidity pools power decentralized exchanges and how you can participate.',
    category: 'defi',
    level: 'intermediate',
    readTime: '7 min read',
    icon: '&#x1F4A7;',
    content: `
      <h2>What Is a Liquidity Pool?</h2>
      <p>A liquidity pool is a collection of funds locked in a smart contract. These pools power decentralized exchanges (DEXs) like Uniswap, allowing people to trade tokens without needing a traditional buyer/seller match.</p>

      <h2>How Liquidity Pools Work</h2>
      <p>Instead of matching individual buyers and sellers (like a stock exchange), DEXs use pools:</p>
      <ul>
        <li>Liquidity providers deposit pairs of tokens (e.g., ETH + USDC) into a pool</li>
        <li>Traders swap tokens against the pool instead of trading with another person</li>
        <li>Liquidity providers earn a share of the trading fees</li>
        <li>Prices are determined automatically by a mathematical formula</li>
      </ul>

      <h2>What Is Impermanent Loss?</h2>
      <p>Impermanent loss occurs when the price ratio of your deposited tokens changes compared to when you deposited them. If one token's price moves significantly, you may end up with less value than if you had simply held the tokens. The loss is "impermanent" because it can reverse if prices return to their original ratio.</p>

      <div class="callout">
        <p><strong>Tip:</strong> If you're new to liquidity pools, start with stablecoin pairs (like USDC/USDT) where impermanent loss is minimal, and work your way up as you gain experience.</p>
      </div>
    `
  },

  // ========== NFTs ==========
  {
    id: 'what-are-nfts',
    title: 'What Are NFTs?',
    description: 'A clear explanation of non-fungible tokens — what they are, how they work, and why people buy them.',
    category: 'nfts',
    level: 'beginner',
    readTime: '8 min read',
    icon: '&#x1F5BC;',
    featured: true,
    content: `
      <h2>NFTs in Plain English</h2>
      <p>NFT stands for Non-Fungible Token. "Non-fungible" simply means unique and not interchangeable. While one Bitcoin is the same as any other Bitcoin (fungible), each NFT is one-of-a-kind.</p>
      <p>An NFT is a digital certificate of ownership stored on a blockchain. It proves that you own a specific digital item — whether that's art, music, a video, a virtual item, or even a tweet.</p>

      <h2>How NFTs Work</h2>
      <ul>
        <li>NFTs are created ("minted") on a blockchain, usually Ethereum</li>
        <li>Each NFT has a unique identifier that distinguishes it from every other token</li>
        <li>Ownership is publicly verifiable on the blockchain</li>
        <li>NFTs can be bought, sold, and traded on marketplaces</li>
      </ul>

      <h2>What Makes NFTs Valuable?</h2>
      <ul>
        <li><strong>Scarcity</strong> — Limited supply creates demand</li>
        <li><strong>Provenance</strong> — The entire ownership history is transparent</li>
        <li><strong>Utility</strong> — Some NFTs provide access to communities, events, or features</li>
        <li><strong>Creator Economy</strong> — Artists can earn royalties on secondary sales</li>
      </ul>

      <div class="callout">
        <p><strong>Beyond Art:</strong> While NFTs gained fame through digital art, they have applications in gaming, music, real estate, identity verification, ticketing, and more. The technology is still evolving.</p>
      </div>
    `
  },
  {
    id: 'how-to-create-nft',
    title: 'How to Create Your Own NFT',
    description: 'A beginner-friendly guide to minting your first NFT, from choosing a platform to listing it for sale.',
    category: 'nfts',
    level: 'intermediate',
    readTime: '10 min read',
    icon: '&#x1F3A8;',
    content: `
      <h2>What You Need to Get Started</h2>
      <ul>
        <li>A crypto wallet (like MetaMask) with some ETH for gas fees</li>
        <li>The digital file you want to turn into an NFT (image, video, audio, etc.)</li>
        <li>An NFT marketplace account (OpenSea, Rarible, Foundation, etc.)</li>
      </ul>

      <h2>Step-by-Step Guide</h2>
      <h3>1. Set Up Your Wallet</h3>
      <p>Install MetaMask or another compatible wallet, fund it with ETH (you'll need some to pay for transaction fees), and connect it to your chosen NFT marketplace.</p>

      <h3>2. Choose a Marketplace</h3>
      <p>Each marketplace has different features and audiences. OpenSea is the largest and most beginner-friendly. Foundation is more curated for artists. Rarible is community-governed.</p>

      <h3>3. Upload and Mint</h3>
      <p>Upload your digital file, add a title, description, and any properties you want. Set your royalty percentage (what you'll earn on future sales). Then click "Mint" — this creates your NFT on the blockchain.</p>

      <h3>4. List for Sale</h3>
      <p>You can list at a fixed price, create an auction, or simply hold your NFT. Consider your pricing strategy based on your goals.</p>

      <div class="callout">
        <p><strong>Cost Tip:</strong> Minting on Ethereum can be expensive due to gas fees. Consider using Polygon (available on OpenSea) for gas-free minting if you're just starting out.</p>
      </div>
    `
  },
  {
    id: 'nft-marketplaces-guide',
    title: 'Guide to NFT Marketplaces',
    description: 'Compare the top NFT marketplaces and find the best platform for buying, selling, and creating NFTs.',
    category: 'nfts',
    level: 'beginner',
    readTime: '6 min read',
    icon: '&#x1F6CD;',
    content: `
      <h2>Top NFT Marketplaces</h2>
      <p>With so many marketplaces available, choosing the right one depends on what you're looking for:</p>

      <h3>OpenSea</h3>
      <p>The largest NFT marketplace with the widest variety of collections. Great for beginners due to its user-friendly interface and Polygon support (which avoids gas fees).</p>

      <h3>Rarible</h3>
      <p>A community-owned marketplace with its own governance token. Supports multiple blockchains and is popular among independent creators.</p>

      <h3>Foundation</h3>
      <p>A curated platform focused on digital art. Known for higher-quality collections and a more exclusive artist community.</p>

      <h3>Blur</h3>
      <p>Popular among professional traders for its advanced features, zero marketplace fees, and aggregation of listings from multiple platforms.</p>

      <div class="callout">
        <p><strong>Safety First:</strong> Always verify you're on the official marketplace website. Scammers create fake sites that look identical. Bookmark the real URLs and never click marketplace links from emails or social media messages.</p>
      </div>
    `
  },

  // ========== TRADING ==========
  {
    id: 'reading-crypto-charts',
    title: 'How to Read Crypto Charts',
    description: 'Learn the basics of reading price charts, understanding candlesticks, and identifying trends.',
    category: 'trading',
    level: 'intermediate',
    readTime: '10 min read',
    icon: '&#x1F4C8;',
    featured: true,
    content: `
      <h2>Why Charts Matter</h2>
      <p>Price charts are visual representations of how a cryptocurrency's price has moved over time. Learning to read them helps you make more informed decisions about when to buy, sell, or hold.</p>

      <h2>Candlestick Basics</h2>
      <p>Most crypto charts use candlesticks, where each "candle" represents a time period (1 hour, 1 day, etc.):</p>
      <ul>
        <li><strong>Green/white candle</strong> — Price went up during that period</li>
        <li><strong>Red/black candle</strong> — Price went down during that period</li>
        <li><strong>Body</strong> — Shows the opening and closing prices</li>
        <li><strong>Wicks (shadows)</strong> — Show the highest and lowest prices reached</li>
      </ul>

      <h2>Key Chart Patterns</h2>
      <ul>
        <li><strong>Support</strong> — A price level where buying pressure tends to prevent further drops</li>
        <li><strong>Resistance</strong> — A price level where selling pressure tends to prevent further rises</li>
        <li><strong>Trend lines</strong> — Lines connecting price points to show the general direction</li>
        <li><strong>Volume</strong> — How much trading activity is occurring (higher volume = stronger moves)</li>
      </ul>

      <div class="callout">
        <p><strong>Remember:</strong> Charts show what has happened, not what will happen. They're a tool to inform your decisions, not a crystal ball. Always combine technical analysis with fundamental research.</p>
      </div>
    `
  },
  {
    id: 'risk-management',
    title: 'Risk Management for Crypto Investors',
    description: 'Essential strategies to protect your portfolio and manage risk in the volatile crypto market.',
    category: 'trading',
    level: 'intermediate',
    readTime: '9 min read',
    icon: '&#x1F6E1;',
    content: `
      <h2>Why Risk Management Matters</h2>
      <p>Cryptocurrency markets are known for dramatic price swings. A coin can rise 50% in a day — and fall just as fast. Without proper risk management, a single bad trade or market crash could wipe out your entire portfolio.</p>

      <h2>Core Risk Management Rules</h2>
      <ul>
        <li><strong>Never invest more than you can afford to lose</strong> — This is the golden rule. Only use money that won't affect your essential living expenses.</li>
        <li><strong>Diversify</strong> — Don't put all your money in one coin. Spread across different assets and categories.</li>
        <li><strong>Set stop-losses</strong> — Decide in advance at what price you'll sell to limit your losses.</li>
        <li><strong>Take profits</strong> — Have a plan for when to take gains off the table.</li>
        <li><strong>Don't FOMO</strong> — Fear of Missing Out leads to bad decisions. Stick to your plan.</li>
      </ul>

      <h2>Position Sizing</h2>
      <p>A common rule of thumb is to never risk more than 1-5% of your total portfolio on a single trade. This way, even if a trade goes wrong, your overall portfolio remains largely intact.</p>

      <div class="callout">
        <p><strong>Pro Tip:</strong> Write down your investment thesis and risk limits before you buy. Emotions run high when prices are moving fast. Having a written plan keeps you grounded and disciplined.</p>
      </div>
    `
  },
  {
    id: 'dollar-cost-averaging',
    title: 'Dollar Cost Averaging (DCA) Strategy',
    description: 'Learn the simplest and most effective investment strategy for long-term crypto investors.',
    category: 'trading',
    level: 'beginner',
    readTime: '6 min read',
    icon: '&#x1F4B5;',
    content: `
      <h2>What Is Dollar Cost Averaging?</h2>
      <p>Dollar Cost Averaging (DCA) is the practice of investing a fixed amount of money at regular intervals, regardless of the price. Instead of trying to time the market, you invest consistently — say, $50 every week or $200 every month.</p>

      <h2>Why DCA Works</h2>
      <ul>
        <li><strong>Removes emotion</strong> — You buy on schedule, not based on fear or greed</li>
        <li><strong>Averages out volatility</strong> — You buy more when prices are low, less when they're high</li>
        <li><strong>Simple to execute</strong> — Set it up once and let it run (many exchanges offer auto-buy)</li>
        <li><strong>Reduces regret</strong> — No agonizing over whether "now" is the right time to buy</li>
      </ul>

      <h2>How to Set Up a DCA Plan</h2>
      <ul>
        <li>Choose the crypto you want to accumulate</li>
        <li>Decide your investment amount and frequency</li>
        <li>Set up recurring buys on your exchange (most major exchanges support this)</li>
        <li>Stay consistent — the whole point is to keep buying regardless of market conditions</li>
      </ul>

      <div class="callout">
        <p><strong>Best For:</strong> DCA is ideal for beginners and long-term investors who believe in the future of cryptocurrency but don't want the stress of trying to time the market.</p>
      </div>
    `
  },

  // ========== SECURITY ==========
  {
    id: 'protecting-your-crypto',
    title: 'How to Protect Your Cryptocurrency',
    description: 'Essential security practices every crypto holder should follow to keep their assets safe.',
    category: 'security',
    level: 'beginner',
    readTime: '8 min read',
    icon: '&#x1F512;',
    featured: true,
    content: `
      <h2>Why Security Matters</h2>
      <p>In the crypto world, you are your own bank. That's empowering, but it also means you're responsible for your own security. Unlike a traditional bank, there's no customer service to call if your crypto gets stolen — most losses are permanent.</p>

      <h2>Essential Security Practices</h2>
      <ul>
        <li><strong>Use strong, unique passwords</strong> — Never reuse passwords across platforms. Use a password manager.</li>
        <li><strong>Enable Two-Factor Authentication (2FA)</strong> — Use an authenticator app (like Google Authenticator), not SMS, for 2FA.</li>
        <li><strong>Secure your seed phrase</strong> — Write it down on paper and store it safely. Never save it digitally or share it with anyone.</li>
        <li><strong>Use hardware wallets</strong> — For significant amounts, use a hardware wallet like Ledger or Trezor.</li>
        <li><strong>Be cautious with links</strong> — Always verify URLs before connecting your wallet or entering credentials.</li>
      </ul>

      <h2>Red Flags to Watch For</h2>
      <ul>
        <li>Anyone asking for your seed phrase or private keys</li>
        <li>Unsolicited DMs about "investment opportunities"</li>
        <li>Websites that look slightly different from the real ones (phishing)</li>
        <li>Promises of guaranteed returns or "risk-free" investments</li>
      </ul>

      <div class="callout">
        <p><strong>Golden Rule:</strong> Never share your seed phrase with anyone, ever. No legitimate service, support team, or platform will ever ask for it. If someone does, it's a scam — 100% of the time.</p>
      </div>
    `
  },
  {
    id: 'avoiding-crypto-scams',
    title: 'How to Spot and Avoid Crypto Scams',
    description: 'Learn to identify the most common crypto scams and protect yourself from fraud.',
    category: 'security',
    level: 'beginner',
    readTime: '9 min read',
    icon: '&#x26A0;',
    content: `
      <h2>Common Crypto Scams</h2>
      <p>Unfortunately, the crypto space attracts scammers. Knowing what to look for is your best defense.</p>

      <h3>Phishing Scams</h3>
      <p>Fake websites or emails that mimic legitimate platforms to steal your login credentials or seed phrase. Always double-check URLs and never click links in unexpected emails or DMs.</p>

      <h3>Rug Pulls</h3>
      <p>When developers create a token, hype it up to attract investment, then suddenly withdraw all funds and disappear. Research the team and smart contracts before investing in new projects.</p>

      <h3>Ponzi/Pyramid Schemes</h3>
      <p>Programs that promise guaranteed high returns funded by new investors' money rather than actual profits. If it sounds too good to be true, it is.</p>

      <h3>Fake Giveaways</h3>
      <p>"Send me 1 ETH and I'll send back 2!" — No legitimate person or company does this. Period.</p>

      <h2>How to Protect Yourself</h2>
      <ul>
        <li>Research thoroughly before investing (check the team, code, community)</li>
        <li>Be skeptical of guaranteed returns or urgency ("limited time!")</li>
        <li>Verify information through multiple sources</li>
        <li>Never share your seed phrase or private keys</li>
        <li>Use reputable platforms and double-check URLs</li>
      </ul>

      <div class="callout">
        <p><strong>If In Doubt:</strong> Ask the community! Crypto forums and communities are generally helpful in identifying scams. If multiple people warn you about a project, listen.</p>
      </div>
    `
  },
  {
    id: '2fa-security-guide',
    title: 'Two-Factor Authentication (2FA) Guide',
    description: 'Why 2FA is critical for crypto security and how to set it up properly.',
    category: 'security',
    level: 'beginner',
    readTime: '6 min read',
    icon: '&#x1F510;',
    content: `
      <h2>What Is 2FA?</h2>
      <p>Two-Factor Authentication adds a second layer of security to your accounts. Even if someone steals your password, they can't access your account without the second factor — usually a time-based code from an app on your phone.</p>

      <h2>Types of 2FA</h2>
      <ul>
        <li><strong>Authenticator Apps (Recommended)</strong> — Apps like Google Authenticator or Authy generate time-based codes. These are the most secure common option.</li>
        <li><strong>Hardware Keys</strong> — Physical devices like YubiKey. The most secure option, used by security professionals.</li>
        <li><strong>SMS Codes (Avoid)</strong> — Text message codes are vulnerable to SIM-swapping attacks and should be avoided for crypto accounts.</li>
      </ul>

      <h2>Setting Up 2FA</h2>
      <ul>
        <li>Download an authenticator app (Google Authenticator, Authy, or Microsoft Authenticator)</li>
        <li>Go to security settings on your exchange or wallet</li>
        <li>Select "Enable 2FA" and scan the QR code with your app</li>
        <li>Save your backup codes in a safe, offline location</li>
        <li>Test that it works before relying on it</li>
      </ul>

      <div class="callout">
        <p><strong>Critical:</strong> Save your 2FA backup codes! If you lose your phone without backup codes, you could be locked out of your accounts permanently. Store them offline in a safe place.</p>
      </div>
    `
  },

  // ========== WALLETS ==========
  {
    id: 'hot-vs-cold-wallets',
    title: 'Hot Wallets vs Cold Wallets',
    description: 'Understand the key differences between hot and cold wallets and when to use each.',
    category: 'wallets',
    level: 'beginner',
    readTime: '7 min read',
    icon: '&#x1F321;',
    content: `
      <h2>Hot Wallets</h2>
      <p>Hot wallets are cryptocurrency wallets that are connected to the internet. They're convenient for everyday use and quick transactions.</p>
      <ul>
        <li><strong>Pros:</strong> Easy to set up, convenient for frequent transactions, free to use</li>
        <li><strong>Cons:</strong> More vulnerable to hacking since they're online</li>
        <li><strong>Examples:</strong> MetaMask, Trust Wallet, Coinbase Wallet</li>
        <li><strong>Best for:</strong> Day-to-day transactions and small amounts</li>
      </ul>

      <h2>Cold Wallets</h2>
      <p>Cold wallets store your crypto offline, making them much more resistant to hacking.</p>
      <ul>
        <li><strong>Pros:</strong> Maximum security, immune to online hacking</li>
        <li><strong>Cons:</strong> Cost money to buy, less convenient for frequent use</li>
        <li><strong>Examples:</strong> Ledger Nano, Trezor, paper wallets</li>
        <li><strong>Best for:</strong> Long-term storage and large amounts</li>
      </ul>

      <div class="callout">
        <p><strong>Best Practice:</strong> Use both! Keep a small amount in a hot wallet for everyday use, and store the bulk of your holdings in a cold wallet. Think of it like a checking account (hot) vs. a safe (cold).</p>
      </div>
    `
  },
  {
    id: 'setting-up-metamask',
    title: 'Setting Up MetaMask: Step-by-Step',
    description: 'A complete guide to installing, configuring, and using MetaMask — the most popular crypto wallet.',
    category: 'wallets',
    level: 'beginner',
    readTime: '8 min read',
    icon: '&#x1F98A;',
    content: `
      <h2>What Is MetaMask?</h2>
      <p>MetaMask is the most popular Ethereum wallet, available as a browser extension and mobile app. It lets you store crypto, interact with DeFi protocols, buy and sell NFTs, and connect to thousands of decentralized applications (dApps).</p>

      <h2>Installation Guide</h2>
      <h3>1. Download MetaMask</h3>
      <p>Visit the official MetaMask website (metamask.io) and download the browser extension for Chrome, Firefox, Brave, or Edge. Or get the mobile app from the App Store/Google Play.</p>

      <h3>2. Create Your Wallet</h3>
      <p>Click "Create a New Wallet," set a strong password, and you'll be given a 12-word Secret Recovery Phrase (seed phrase).</p>

      <h3>3. Secure Your Seed Phrase</h3>
      <p>Write down your 12-word phrase on paper. Store it somewhere safe and offline. Never save it in a file, screenshot, or cloud storage. Anyone with this phrase can access your wallet.</p>

      <h3>4. Fund Your Wallet</h3>
      <p>You can buy ETH directly in MetaMask, transfer from an exchange, or receive from another wallet using your public address.</p>

      <div class="callout">
        <p><strong>Security Tip:</strong> Only download MetaMask from the official website (metamask.io). There are many fake MetaMask extensions and apps designed to steal your funds. Always verify the source.</p>
      </div>
    `
  },
  {
    id: 'hardware-wallets-guide',
    title: 'Hardware Wallets: The Ultimate Security Guide',
    description: 'Everything you need to know about hardware wallets — what they are, how they work, and which to choose.',
    category: 'wallets',
    level: 'intermediate',
    readTime: '9 min read',
    icon: '&#x1F4BE;',
    content: `
      <h2>What Is a Hardware Wallet?</h2>
      <p>A hardware wallet is a physical device that stores your cryptocurrency private keys offline. It's considered the gold standard for crypto security because your keys never touch the internet, making them virtually immune to online hacking.</p>

      <h2>How Hardware Wallets Work</h2>
      <ul>
        <li>Your private keys are generated and stored on the device itself</li>
        <li>Transactions are signed on the device, then broadcast to the network</li>
        <li>Even if your computer is compromised, your keys remain safe</li>
        <li>A PIN and/or passphrase adds additional protection</li>
      </ul>

      <h2>Popular Hardware Wallets</h2>
      <h3>Ledger (Nano S Plus / Nano X)</h3>
      <p>The most popular hardware wallet brand. Supports thousands of cryptocurrencies. The Nano X has Bluetooth for mobile use.</p>

      <h3>Trezor (Model One / Model T)</h3>
      <p>The original hardware wallet. Open-source firmware and a strong reputation for security. The Model T features a touchscreen.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Only buy from official stores — never secondhand or third-party sellers</li>
        <li>Set up the device yourself on a clean computer</li>
        <li>Store your seed phrase separately from the device</li>
        <li>Keep your device firmware updated</li>
      </ul>

      <div class="callout">
        <p><strong>When to Get One:</strong> If you're holding more than you'd be comfortable losing, it's time for a hardware wallet. Think of it as insurance for your crypto portfolio.</p>
      </div>
    `
  }
];

// Make data available globally
window.CATEGORIES = CATEGORIES;
window.ARTICLES = ARTICLES;
