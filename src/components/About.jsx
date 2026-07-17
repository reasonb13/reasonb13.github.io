export default function About() {
  const stats = [
    { number: '80+', label: '完成项目' },
    { number: '5+', label: '行业经验' },
    { number: '50+', label: '合作品牌' },
    { number: '2M+', label: '累计播放' },
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left reveal">
            <div className="about__avatar-wrapper">
              <div className="about__avatar">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="98" stroke="var(--accent-dim)" strokeWidth="1" />
                  <circle cx="100" cy="100" r="80" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M100 50c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50z" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="2"/>
                  <circle cx="100" cy="90" r="25" fill="var(--accent-dim)"/>
                  <ellipse cx="100" cy="145" rx="40" ry="20" fill="var(--accent-dim)"/>
                  <rect x="82" y="82" width="8" height="16" rx="4" fill="var(--accent)"/>
                  <rect x="110" y="82" width="8" height="16" rx="4" fill="var(--accent)"/>
                  <path d="M90 110q10 5 20 0" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="about__right reveal reveal-delay-1">
            <p className="section-label">关于我</p>
            <h2 className="section-title">用镜头语言<br />创造视觉盛宴</h2>
            <div className="glow-line" />
            <p className="about__bio">
              作为一名专业的视频拍摄与剪辑师，我致力于通过影像传达品牌故事与情感。
              从前期策划到后期制作，每一个环节都倾注对品质的极致追求。
            </p>
            <p className="about__bio about__bio--secondary">
              擅长商业广告、纪录片、短视频等多元内容的创作，熟练运用各类拍摄设备与后期软件，
              为客户提供从拍摄到成片的一站式解决方案。
            </p>

            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-label">所在地</span>
                <span className="about__info-value">中国 · 上海</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">邮箱</span>
                <span className="about__info-value">contact@example.com</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">电话</span>
                <span className="about__info-value">+86 138-0000-0000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <div key={i} className={`about__stat reveal reveal-delay-${i + 1}`}>
              <span className="about__stat-number">{s.number}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about__avatar-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .about__avatar {
          position: relative;
          width: 280px;
          height: 280px;
          animation: float 6s ease-in-out infinite;
        }
        .about__avatar::before {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-dim), transparent);
          opacity: 0.3;
        }
        .about__bio {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about__bio--secondary {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .about__info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 32px;
          padding: 24px;
          border-radius: var(--radius);
          background: var(--bg-card);
          border: 1px solid var(--border);
        }
        .about__info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .about__info-label {
          color: var(--text-muted);
          font-size: 0.875rem;
        }
        .about__info-value {
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .about__stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 80px;
        }
        .about__stat {
          text-align: center;
          padding: 32px 24px;
          border-radius: var(--radius);
          background: var(--bg-card);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .about__stat:hover {
          border-color: var(--accent-dim);
          transform: translateY(-4px);
        }
        .about__stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent), #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        .about__stat-label {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        @media (max-width: 968px) {
          .about__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about__avatar { width: 200px; height: 200px; }
          .about__stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .about__stat-number { font-size: 2rem; }
        }
        @media (max-width: 480px) {
          .about__stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
