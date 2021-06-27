require 'rails_helper'

RSpec.describe Collection, type: :model do
  describe 'validations' do
    it { should have_many(:words) }
    it { should have_many(:word_collections) }
    it { should validate_presence_of(:title) }
  end
end
