import Layout from "./../components/layout/layout";
function Typography() {
    return (
        <>
            <Layout>
                <main className="bg-grey pb-30">
                    <div className="container single-content">
                        <div className="entry-header entry-header-style-1 mb-50 pt-50">
                            <h1 className="entry-title mb-50 font-weight-900 text-center">
                                Typography - Style Guide
                            </h1>
                        </div>
                        {/*end single header*/}
                        <figure className="image mb-30 m-auto text-center border-radius-10">
                            <img className="border-radius-10" src="/assets/imgs/news/news-16.jpg" alt="post-title" />
                        </figure>
                        {/*figure*/}
                        <article className="entry-wraper mb-50">
                            <div className="single-excerpt">
                                <p className="font-large">Tolerably much and ouch the in began alas more ouch some then accommodating flimsy wholeheartedly after hello slightly the that cow pouted much a goodness bound rebuilt poetically jaguar groundhog</p>
                            </div>
                            <div className="entry-main-content">
                                <hr className="wp-block-separator is-style-dots" />
                                <h2>Headings</h2>
                                <h1>Header one</h1>
                                <h2>Header two</h2>
                                <h3>Header three</h3>
                                <h4>Header four</h4>
                                <h5>Header five</h5>
                                <h6>Header six</h6>
                                <hr className="wp-block-separator" />
                                <h2>Links</h2>
                                <p>If you paste in a URL, like <a href="https://alithemes.com">https://alithemes.com</a> - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to <a href="https://alithemes.com">the Alithemes website.</a></p>
                                <hr className="wp-block-separator" />
                                <h2>Blockquotes</h2>
                                <p>Single line blockquote:</p>
                                <blockquote>
                                    <p>Stay hungry. Stay foolish.</p>
                                </blockquote>
                                <p>Multi line blockquote with a cite reference:</p>
                                <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
                                    <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/blockquote#Notes">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" title="The HTML Citation Element <cite> represents a reference to a creative work. It must include the title of a work or a URL reference, which may be in an abbreviated form according to the conventions used for the addition of citation metadata."><code>&lt;cite&gt;</code></a> element.</p>
                                </blockquote>
                                <p><cite>multiple contributors</cite> – MDN HTML element reference – blockquote</p>
                                <hr className="wp-block-separator" />
                                <h2>Tables</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Employee</th>
                                            <th>Salary</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th><a href="http://example.org/">John Doe</a></th>
                                            <td>$1</td>
                                            <td>Because that’s all Steve Jobs needed for a salary.</td>
                                        </tr>
                                        <tr>
                                            <th><a href="http://example.org/">Jane Doe</a></th>
                                            <td>$100K</td>
                                            <td>For all the blogging she does.</td>
                                        </tr>
                                        <tr>
                                            <th><a href="http://example.org/">Fred Bloggs</a></th>
                                            <td>$100M</td>
                                            <td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
                                        </tr>
                                        <tr>
                                            <th><a href="http://example.org/">Jane Bloggs</a></th>
                                            <td>$100B</td>
                                            <td>With hair like that?! Enough said…</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr className="wp-block-separator" />
                                <h2>Definition Lists</h2>
                                <dl>
                                    <dt>Definition List Title</dt>
                                    <dd>Definition list division.</dd>
                                    <dt>Startup</dt>
                                    <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
                                    <dt>#dowork</dt>
                                    <dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.</dd>
                                    <dt>Do It Live</dt>
                                    <dd>I’ll let Bill O’Reilly will <a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a> this one.</dd>
                                </dl>
                                <hr className="wp-block-separator" />
                                <h2>Unordered Lists (Nested)</h2>
                                <ul>
                                    <li>List item one
                                        <ul>
                                            <li>List item one
                                                <ul>
                                                    <li>List item one</li>
                                                    <li>List item two</li>
                                                    <li>List item three</li>
                                                    <li>List item four</li>
                                                </ul>
                                            </li>
                                            <li>List item two</li>
                                            <li>List item three</li>
                                            <li>List item four</li>
                                        </ul>
                                    </li>
                                    <li>List item two</li>
                                    <li>List item three</li>
                                    <li>List item four</li>
                                </ul>
                                <hr className="wp-block-separator" />
                                <h2>Ordered List (Nested)</h2>
                                <ol start={8}>
                                    <li>List item one -start at 8
                                        <ol>
                                            <li>List item one
                                                <ol reversed="reversed">
                                                    <li>List item one -reversed attribute</li>
                                                    <li>List item two</li>
                                                    <li>List item three</li>
                                                    <li>List item four</li>
                                                </ol>
                                            </li>
                                            <li>List item two</li>
                                            <li>List item three</li>
                                            <li>List item four</li>
                                        </ol>
                                    </li>
                                    <li>List item two</li>
                                    <li>List item three</li>
                                    <li>List item four</li>
                                </ol>
                                <hr className="wp-block-separator" />
                                <h2>HTML Tags</h2>
                                <p>These supported tags come from the WordPress.com code <a title="Code" href="https://en.support.wordpress.com/code/">FAQ</a>.</p>
                                <p><strong>Address Tag</strong></p>
                                <address>1 Infinite Loop<br />
                                    Cupertino, CA 95014<br />
                                    United States</address>
                                <p><strong>Anchor Tag (aka. Link)</strong></p>
                                <p>This is an example of a <a title="WordPress Foundation" href="https://wordpressfoundation.org/">link</a>.</p>
                                <p><strong>Abbreviation Tag</strong></p>
                                <p>The abbreviation <abbr title="Seriously">srsly</abbr> stands for “seriously”.</p>
                                <p><strong>abbr Tag (<em>deprecated in HTML5</em>)</strong></p>
                                <p>The abbr <abbr title="For The Win">ftw</abbr> stands for “for the win”.</p>
                                <p><strong>Big Tag</strong> (<em>deprecated in HTML5</em>)</p>
                                <p>These tests are a big deal, but this tag is no longer supported in HTML5.</p>
                                <p><strong>Cite Tag</strong></p>
                                <p>“Code is poetry.” —<cite>Automattic</cite></p>
                                <p><strong>Code Tag</strong></p>
                                <p>This tag styles blocks of code.<br />
                                    <code>.post-title {'{'}<br />
                                        margin: 0 0 5px;<br />
                                        font-weight: bold;<br />
                                        font-size: 38px;<br />
                                        line-height: 1.2;<br />
                                        and here's a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;<br />
                                        {'}'}</code><br />
                                    You will learn later on in these tests that <code>word-wrap: break-word;</code> will be your best friend.</p>
                                <p><strong>Delete Tag</strong></p>
                                <p>This tag will let you <del>strike out text</del>, but this tag is <em>recommended</em> supported in HTML5 (use the <code>&lt;s&gt;</code> instead).</p>
                                <p><strong>Emphasize Tag</strong></p>
                                <p>The emphasize tag should <em>italicize</em> <i>text</i>.</p>
                                <p><strong>Horizontal Rule Tag</strong></p>
                                <hr />
                                <p>This sentence is following a <code>&lt;hr /&gt;</code> tag.</p>
                                <p><strong>Insert Tag</strong></p>
                                <p>This tag should denote <ins>inserted</ins> text.</p>
                                <p><strong>Keyboard Tag</strong></p>
                                <p>This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>
                                <p><strong>Preformatted Tag</strong></p>
                                <p>This tag is for preserving whitespace as typed, such as in poetry or ASCII art.</p>
                                <hr className="wp-block-separator" />
                                <h2>The Road Not Taken</h2>
                                <pre><cite>Robert Frost</cite>{"\n"}{"                                  "}Two roads diverged in a yellow wood,{"\n"}{"                                  "}And sorry I could not travel both{"          "}(\_/){"\n"}{"                                  "}And be one traveler, long I stood{"         "}(='.'=){"\n"}{"                                  "}And looked down one as far as I could{"     "}(")_("){"\n"}{"                                  "}To where it bent in the undergrowth;{"\n"}{"\n"}{"                                  "}Then took the other, as just as fair,{"\n"}{"                                  "}And having perhaps the better claim,{"          "}|\_/|{"\n"}{"                                  "}Because it was grassy and wanted wear;{"       "}/ @ @ \{"\n"}{"                                  "}Though as for that the passing there{"        "}( &gt; º &lt; ){"\n"}{"                                  "}Had worn them really about the same,{"         "}`&gt;&gt;x&lt;&lt;´{"\n"}{"                                                                               "}/{"  "}O{"  "}\{"\n"}{"                                  "}And both that morning equally lay{"\n"}{"                                  "}In leaves no step had trodden black.{"\n"}{"                                  "}Oh, I kept the first for another day!{"\n"}{"                                  "}Yet knowing how way leads on to way,{"\n"}{"                                  "}I doubted if I should ever come back.{"\n"}{"\n"}{"                                  "}I shall be telling this with a sigh{"\n"}{"                                  "}Somewhere ages and ages hence:{"\n"}{"                                  "}Two roads diverged in a wood, and I—{"\n"}{"                                  "}I took the one less traveled by,{"\n"}{"                                  "}And that has made all the difference.{"\n"}{"\n"}{"\n"}{"                                  "}and here's a line of some really, really, really, really long text, just to see how it is handled and to find out how it overflows;{"\n"}{"                                "}</pre>
                                <p><strong>Quote Tag</strong> for short, inline quotes</p>
                                <p><q>Developers, developers, developers...</q> --Steve Ballmer</p>
                                <p><strong>Strike Tag</strong> (<em>deprecated in HTML5</em>) and <strong>S Tag</strong></p>
                                <p>This tag shows strike-through <s>text</s>.</p>
                                <p><strong>Small Tag</strong></p>
                                <p>This tag shows <small>smaller<small> text.</small></small></p>
                                <p><strong>Strong Tag</strong></p>
                                <p>This tag shows <strong>bold<strong> text.</strong></strong></p>
                                <p><strong>Subscript Tag</strong></p>
                                <p>Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.</p>
                                <p><strong>Superscript Tag</strong></p>
                                <p>Still sticking with science and Albert Einstein's E = MC<sup>2</sup>, which should lift the 2 up.</p>
                                <p><strong>Teletype Tag </strong>(<em>obsolete in HTML5</em>)</p>
                                <p>This rarely used tag emulates, which is usually styled like the <code>&lt;code&gt;</code> tag.</p>
                                <p><strong>Underline Tag</strong> <em>deprecated in HTML 4, re-introduced in HTML5 with other semantics</em></p>
                                <p>This tag shows <u>underlined text</u>.</p>
                                <p><strong>Variable Tag</strong></p>
                                <p>This allows you to denote <var>variables</var>.</p>
                                <div className="clearfix" />
                            </div>
                            <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                                <div className="tags">
                                    <span>Tags: </span>
                                    <a href="category.html" rel="tag">deer</a>
                                    <a href="category.html" rel="tag">nature</a>
                                    <a href="category.html" rel="tag">conserve</a>
                                </div>
                            </div>
                            <div className="single-social-share clearfix wow fadeIn animated">
                                <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
                                    <span className="hit-count mr-15"><i className="elegant-icon icon_comment_alt mr-5" />182 comments</span>
                                    <span className="hit-count mr-15"><i className="elegant-icon icon_like mr-5" />268 likes</span>
                                    <span className="hit-count"><i className="elegant-icon icon_star-half_alt mr-5" />Rate: 9/10</span>
                                </div>
                                <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
                                    <li className="list-inline-item text-muted"><span>Share this: </span></li>
                                    <li className="list-inline-item"><a className="social-icon fb text-xs-center" target="_blank" href="#"><i className="elegant-icon social_facebook" /></a></li>
                                    <li className="list-inline-item"><a className="social-icon tw text-xs-center" target="_blank" href="#"><i className="elegant-icon social_twitter " /></a></li>
                                    <li className="list-inline-item"><a className="social-icon pt text-xs-center" target="_blank" href="#"><i className="elegant-icon social_pinterest " /></a></li>
                                </ul>
                            </div>
                            {/*author box*/}
                            <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
                                <div className="author-image mb-30">
                                    <a href="author.html"><img src="/assets/imgs/authors/author-3.jpg" alt="" className="avatar" /></a>
                                </div>
                                <div className="author-info">
                                    <h4 className="font-weight-bold mb-20"><span className="vcard author"><span className="fn"><a href="author.html" title="Posted by Barbara Cartland" rel="author">Barbara Cartland</a></span></span>
                                    </h4>
                                    <h5 className="text-muted">About author</h5>
                                    <div className="author-description text-muted">You should write because you love the shape of stories and sentences and the creation of different words on a page. </div>
                                    <a href="author.html" className="author-bio-link mb-md-0 mb-3">View all posts (125)</a>
                                    <div className="author-social">
                                        <ul className="author-social-icons">
                                            <li className="author-social-link-facebook"><a href="#" target="_blank"><i className="ti-facebook" /></a></li>
                                            <li className="author-social-link-twitter"><a href="#" target="_blank"><i className="ti-twitter-alt" /></a></li>
                                            <li className="author-social-link-pinterest"><a href="#" target="_blank"><i className="ti-pinterest" /></a></li>
                                            <li className="author-social-link-instagram"><a href="#" target="_blank"><i className="ti-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*related posts*/}
                            <div className="related-posts">
                                <div className="post-module-3">
                                    <div className="widget-header-2 position-relative mb-30">
                                        <h5 className="mt-5 mb-30">Related posts</h5>
                                    </div>
                                    <div className="loop-list loop-list-style-1">
                                        <article className="hover-up-2 transition-normal wow fadeInUp  animated">
                                            <div className="row mb-40 list-style-2">
                                                <div className="col-md-4">
                                                    <div className="post-thumb position-relative border-radius-5">
                                                        <div className="img-hover-slide border-radius-5 position-relative" style={{ backgroundImage: 'url(assets/imgs/news/news-13.jpg)' }}>
                                                            <a className="img-link" href="single.html" />
                                                        </div>
                                                        <ul className="social-share">
                                                            <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                                                            <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                                                            <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                                                            <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 align-self-center">
                                                    <div className="post-content">
                                                        <div className="entry-meta meta-0 font-small mb-10">
                                                            <a href="category.html"><span className="post-cat text-primary">Food</span></a>
                                                        </div>
                                                        <h5 className="post-title font-weight-900 mb-20">
                                                            <a href="single.html">Helpful Tips for Working from Home as a Freelancer</a>
                                                            <span className="post-format-icon"><i className="elegant-icon icon_star_alt" /></span>
                                                        </h5>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">7 August</span>
                                                            <span className="time-reading has-dot">11 mins read</span>
                                                            <span className="post-by has-dot">3k views</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="hover-up-2 transition-normal wow fadeInUp  animated">
                                            <div className="row mb-40 list-style-2">
                                                <div className="col-md-4">
                                                    <div className="post-thumb position-relative border-radius-5">
                                                        <div className="img-hover-slide border-radius-5 position-relative" style={{ backgroundImage: 'url(assets/imgs/news/news-4.jpg)' }}>
                                                            <a className="img-link" href="single.html" />
                                                        </div>
                                                        <ul className="social-share">
                                                            <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                                                            <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                                                            <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                                                            <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 align-self-center">
                                                    <div className="post-content">
                                                        <div className="entry-meta meta-0 font-small mb-10">
                                                            <a href="category.html"><span className="post-cat text-success">Cooking</span></a>
                                                        </div>
                                                        <h5 className="post-title font-weight-900 mb-20">
                                                            <a href="single.html">10 Easy Ways to Be Environmentally Conscious At Home</a>
                                                        </h5>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">27 Sep</span>
                                                            <span className="time-reading has-dot">10 mins read</span>
                                                            <span className="post-by has-dot">22k views</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            {/*More posts*/}
                            <div className="single-more-articles border-radius-5">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">You might be interested in</h5>
                                    <button className="single-more-articles-close"><i className="elegant-icon icon_close" /></button>
                                </div>
                                <div className="post-block-list post-module-1 post-module-5">
                                    <ul className="list-post">
                                        <li className="mb-30">
                                            <div className="d-flex hover-up-2 transition-normal">
                                                <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                    <a className="color-white" href="single.html">
                                                        <img src="/assets/imgs/news/thumb-1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="post-content media-body">
                                                    <h6 className="post-title mb-15 text-limit-2-row font-medium"><a href="single.html">The Best Time to Travel to Cambodia</a></h6>
                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span className="post-on">27 Jan</span>
                                                        <span className="post-by has-dot">13k views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-10">
                                            <div className="d-flex hover-up-2 transition-normal">
                                                <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                    <a className="color-white" href="single.html">
                                                        <img src="/assets/imgs/news/thumb-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="post-content media-body">
                                                    <h6 className="post-title mb-15 text-limit-2-row font-medium"><a href="single.html">20 Photos to Inspire You to Visit Cambodia</a></h6>
                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span className="post-on">27 August</span>
                                                        <span className="post-by has-dot">14k views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*Comments*/}
                            <div className="comments-area">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Comments</h5>
                                </div>
                                <div className="comment-list wow fadeIn animated">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/assets/imgs/authors/author-4.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <p className="comment">
                                                    Vestibulum euismod, leo eget varius gravida, eros enim interdum urna, non rutrum enim ante quis metus. Duis porta ornare nulla ut bibendum
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <h5>
                                                            <a href="#">Rosie</a>
                                                        </h5>
                                                        <p className="date">6 minutes ago </p>
                                                    </div>
                                                    <div className="reply-btn">
                                                        <a href="#" className="btn-reply">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list wow fadeIn animated">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/assets/imgs/authors/author-2.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <p className="comment">
                                                    Sed ac lorem felis. Ut in odio lorem. Quisque magna dui, maximus ut commodo sed, vestibulum ac nibh. Aenean a tortor in sem tempus auctor
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <h5>
                                                            <a href="#">Agatha Christie</a>
                                                        </h5>
                                                        <p className="date">December 4, 2020 at 3:12 pm </p>
                                                    </div>
                                                    <div className="reply-btn">
                                                        <a href="#" className="btn-reply">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-comment depth-2 justify-content-between d-flex mt-50">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/assets/imgs/authors/author.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <p className="comment">
                                                    Sed ac lorem felis. Ut in odio lorem. Quisque magna dui, maximus ut commodo sed, vestibulum ac nibh. Aenean a tortor in sem tempus auctor
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <h5>
                                                            <a href="#">Steven</a>
                                                        </h5>
                                                        <p className="date">December 4, 2020 at 3:12 pm </p>
                                                    </div>
                                                    <div className="reply-btn">
                                                        <a href="#" className="btn-reply">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list wow fadeIn animated">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/assets/imgs/authors/author-3.jpg" alt="" />
                                            </div>
                                            <div className="desc">
                                                <p className="comment">
                                                    Donec in ullamcorper quam. Aenean vel nibh eu magna gravida fermentum. Praesent eget nisi pulvinar, sollicitudin eros vitae, tristique odio.
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <h5>
                                                            <a href="#">Danielle Steel</a>
                                                        </h5>
                                                        <p className="date">December 4, 2020 at 3:12 pm </p>
                                                    </div>
                                                    <div className="reply-btn">
                                                        <a href="#" className="btn-reply">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*comment form*/}
                            <div className="comment-form wow fadeIn animated">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Leave a Reply</h5>
                                </div>
                                <form className="form-contact comment_form" action="#" id="commentForm">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Write Comment" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn button button-contactForm">Post Comment</button>
                                    </div>
                                </form>
                            </div>
                        </article>
                    </div>
                    {/*container*/}
                </main>
            </Layout>
        </>
    );
}
export default Typography;

