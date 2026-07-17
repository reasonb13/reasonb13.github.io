import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__bg">
        <div className="contact__gradient" />
      </div>

      <div className="contact__content container">
        <div className="contact__left reveal">
          <p className="section-label">联系方式</p>
          <h2 className="contact__title">
            让我们<br />
            <span className="contact__title-accent">一起创作</span>
          </h2>
          <div className="glow-line" />
          <p className="contact__desc">
            无论是品牌合作、项目委托还是创意交流，
            都欢迎随时联系。期待用镜头为你的故事增添光彩。
          </p>

          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">✉</span>
              <div>
                <span className="contact__info-label">邮箱</span>
                <span className="contact__info-value">contact@example.com</span>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📱</span>
              <div>
                <span className="contact__info-label">电话</span>
                <span className="contact__info-value">+86 138-0000-0000</span>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div>
                <span className="contact__info-label">地址</span>
                <span className="contact__info-value">中国 · 上海</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__right reveal reveal-delay-1">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label className="contact__form-label">姓名</label>
                <input type="text" className="contact__form-input" placeholder="你的名字" required />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label">邮箱</label>
                <input type="email" className="contact__form-input" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label">主题</label>
              <input type="text" className="contact__form-input" placeholder="合作/咨询/其他" />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label">留言</label>
              <textarea className="contact__form-textarea" rows="4" placeholder="请描述您的需求..." required />
            </div>
            <button type="submit" className="contact__form-submit">
              {submitted ? '✓ 已发送' : '发送消息'}
            </button>
          </form>
        </div>
      </div>

      <div className="contact__footer">
        <p>© 2025 个人作品集 · All Rights Reserved</p>
      </div>

      <style>{`
        .contact {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .contact__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .contact__gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 30% 50%, rgba(0, 212, 255, 0.05), transparent),
            radial-gradient(ellipse 50% 40% at 70% 30%, rgba(124, 58, 237, 0.03), transparent);
        }
        .contact__content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .contact__title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }
        .contact__title-accent {
          background: linear-gradient(135deg, var(--accent), #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact__desc {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 450px;
        }
        .contact__info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact__info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .contact__info-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--accent-dim);
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .contact__info-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 2px;
        }
        .contact__info-value {
          font-size: 0.9rem;
          font-weight: 500;
        }
        .contact__form {
          padding: 36px;
          border-radius: var(--radius-lg);
          background: var(--bg-card);
          border: 1px solid var(--border);
        }
        .contact__form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .contact__form-group {
          margin-bottom: 20px;
        }
        .contact__form-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .contact__form-input,
        .contact__form-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          background: var(--bg-primary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: inherit;
          transition: var(--transition);
          outline: none;
        }
        .contact__form-input:focus,
        .contact__form-textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-dim);
        }
        .contact__form-textarea {
          resize: vertical;
          min-height: 100px;
        }
        .contact__form-submit {
          width: 100%;
          padding: 14px;
          border-radius: var(--radius-sm);
          background: var(--accent);
          color: #0a0a0a;
          font-size: 0.95rem;
          font-weight: 600;
          transition: var(--transition);
        }
        .contact__form-submit:hover {
          box-shadow: 0 0 40px var(--accent-glow);
          transform: translateY(-2px);
        }
        .contact__footer {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 32px;
          border-top: 1px solid var(--border);
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 968px) {
          .contact__content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact__form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
