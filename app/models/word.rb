class Word < ApplicationRecord
  validates :chinese, presence: true, format: { with: /\A\p{Han}+\z/, message: '請輸入中文' }
  # 暫時先取消韓文的驗證
  # validates :korean format: {with: /\A\p{Hangul}+\z/, message: '請輸入韓文'}
end