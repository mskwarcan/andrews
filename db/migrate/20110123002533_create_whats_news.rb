class CreateWhatsNews < ActiveRecord::Migration

  def self.up
    create_table :whats_news do |t|
      t.string :title
      t.integer :image_id
      t.text :body
      t.integer :position

      t.timestamps
    end

    add_index :whats_news, :id

    load(Rails.root.join('db', 'seeds', 'whats_news.rb'))
  end

  def self.down
    UserPlugin.destroy_all({:name => "Whats News"})

    Page.delete_all({:link_url => "/whats_news"})

    drop_table :whats_news
  end

end
