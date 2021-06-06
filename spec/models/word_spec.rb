# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Word, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:chinese) }
    it { should allow_value('中文').for(:chinese) }
  end
end
