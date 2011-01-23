class WhatsNewsController < ApplicationController

  before_filter :find_all_whats_news
  before_filter :find_page

  def index
    # you can use meta fields from your model instead (e.g. browser_title)
    # by swapping @page for @whats_new in the line below:
    present(@page)
  end

  def show
    @whats_new = WhatsNew.find(params[:id])

    # you can use meta fields from your model instead (e.g. browser_title)
    # by swapping @page for @whats_new in the line below:
    present(@page)
  end

protected

  def find_all_whats_news
    @whats_news = WhatsNew.find(:all, :order => "position ASC")
  end

  def find_page
    @page = Page.find_by_link_url("/whats_news")
  end

end
