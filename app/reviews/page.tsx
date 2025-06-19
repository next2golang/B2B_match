"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Star, ThumbsUp, MessageCircle, Globe, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedRating, setSelectedRating] = useState("")

  const reviews = [
    {
      id: 1,
      type: "agent",
      targetName: "Global Education Partners",
      targetId: 1,
      rating: 5,
      title: "素晴らしいサポートでアメリカ留学が実現",
      content:
        "息子のアメリカ大学留学をサポートしていただきました。最初の相談から合格まで、本当に親身になってサポートしてくださいました。特に志望校選びでは、息子の性格や将来の目標を考慮して最適な学校を提案してくれました。",
      author: "田中美香",
      authorInitials: "TM",
      date: "2024-01-15",
      helpful: 24,
      country: "アメリカ",
      program: "大学留学",
      verified: true,
    },
    {
      id: 2,
      type: "school",
      targetName: "International School of Tokyo",
      targetId: 1,
      rating: 4,
      title: "多様性に富んだ素晴らしい環境",
      content:
        "娘が3年間通いました。40カ国以上の生徒が在籍しており、真の国際的な環境で学ぶことができました。IBプログラムは厳しいですが、先生方のサポートが手厚く、娘も無事にディプロマを取得できました。",
      author: "佐藤健一",
      authorInitials: "SK",
      date: "2024-01-10",
      helpful: 18,
      country: "日本",
      program: "IB",
      verified: true,
    },
    {
      id: 3,
      type: "agent",
      targetName: "International Study Connect",
      targetId: 2,
      rating: 5,
      title: "オーストラリア親子留学で人生が変わりました",
      content:
        "家族でオーストラリアに移住しました。最初は不安でしたが、こちらのエージェントのサポートのおかげで、子供たちの学校選びから住居探し、ビザ申請まで全てスムーズに進みました。現在は現地の生活にも慣れ、子供たちも楽しく学校に通っています。",
      author: "山田花子",
      authorInitials: "YH",
      date: "2024-01-08",
      helpful: 32,
      country: "オーストラリア",
      program: "親子留学",
      verified: true,
    },
    {
      id: 4,
      type: "school",
      targetName: "Singapore American School",
      targetId: 2,
      rating: 5,
      title: "世界トップレベルの教育環境",
      content:
        "息子が高校3年間通いました。APコースの充実度、課外活動の豊富さ、そして何より先生方の質の高さに感動しました。卒業生の大学進学実績も素晴らしく、息子もアイビーリーグに合格することができました。",
      author: "鈴木太郎",
      authorInitials: "ST",
      date: "2024-01-05",
      helpful: 27,
      country: "シンガポール",
      program: "AP",
      verified: true,
    },
    {
      id: 5,
      type: "agent",
      targetName: "European Education Hub",
      targetId: 3,
      rating: 4,
      title: "ドイツ大学院留学のプロフェッショナル",
      content:
        "ドイツでのMBA取得を目指していましたが、複雑な入学手続きや語学要件について不安がありました。こちらのエージェントは現地の大学との強いコネクションがあり、私の経歴に最適なプログラムを見つけてくれました。",
      author: "高橋雅子",
      authorInitials: "TM",
      date: "2024-01-03",
      helpful: 15,
      country: "ドイツ",
      program: "MBA",
      verified: true,
    },
    {
      id: 6,
      type: "school",
      targetName: "British International School",
      targetId: 3,
      rating: 4,
      title: "伝統と革新が融合した教育",
      content:
        "娘がYear 7からYear 13まで通いました。イギリスの伝統的な教育システムと現代的な国際教育が見事に融合されています。特に文学と歴史の授業は素晴らしく、娘の批判的思考力が大きく向上しました。",
      author: "中村英子",
      authorInitials: "NE",
      date: "2023-12-28",
      helpful: 21,
      country: "イギリス",
      program: "IGCSE",
      verified: true,
    },
  ]

  const categories = ["すべて", "エージェント", "学校"]
  const ratings = ["すべて", "5つ星", "4つ星", "3つ星", "2つ星", "1つ星"]

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.targetName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "すべて" ||
      (selectedCategory === "エージェント" && review.type === "agent") ||
      (selectedCategory === "学校" && review.type === "school")
    const matchesRating = !selectedRating || selectedRating === "すべて" || selectedRating === `${review.rating}つ星`

    return matchesSearch && matchesCategory && matchesRating
  })

  const agentReviews = reviews.filter((review) => review.type === "agent")
  const schoolReviews = reviews.filter((review) => review.type === "school")

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback className="bg-blue-100 text-blue-600">{review.authorInitials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{review.author}</span>
                {review.verified && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    認証済み
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="h-3 w-3" />
                <span>{review.date}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <Badge variant="outline" className="mb-2">
            {review.type === "agent" ? "エージェント" : "学校"}: {review.targetName}
          </Badge>
          <h3 className="font-semibold text-lg mb-2">{review.title}</h3>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">{review.country}</Badge>
            <Badge variant="outline">{review.program}</Badge>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <ThumbsUp className="h-4 w-4" />
              <span>参考になった ({review.helpful})</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>返信</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduMatch Global
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/agents" className="text-gray-700 hover:text-blue-600 transition-colors">
                エージェント
              </Link>
              <Link href="/schools" className="text-gray-700 hover:text-blue-600 transition-colors">
                学校
              </Link>
              <Link href="/reviews" className="text-blue-600 font-semibold">
                レビュー
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                無料相談
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">利用者レビュー</h1>
          <p className="text-gray-600">実際の利用者による詳細なレビューと評価をご覧ください</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="レビューを検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="カテゴリを選択" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger>
                <SelectValue placeholder="評価を選択" />
              </SelectTrigger>
              <SelectContent>
                {ratings.map((rating) => (
                  <SelectItem key={rating} value={rating}>
                    {rating}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              レビューを書く
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">すべてのレビュー ({reviews.length})</TabsTrigger>
            <TabsTrigger value="agents">エージェント ({agentReviews.length})</TabsTrigger>
            <TabsTrigger value="schools">学校 ({schoolReviews.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="mb-6">
              <p className="text-gray-600">{filteredReviews.length}件のレビューが見つかりました</p>
            </div>
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </TabsContent>

          <TabsContent value="agents" className="space-y-6">
            <div className="mb-6">
              <p className="text-gray-600">{agentReviews.length}件のエージェントレビューが見つかりました</p>
            </div>
            {agentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </TabsContent>

          <TabsContent value="schools" className="space-y-6">
            <div className="mb-6">
              <p className="text-gray-600">{schoolReviews.length}件の学校レビューが見つかりました</p>
            </div>
            {schoolReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            さらに読み込む
          </Button>
        </div>
      </div>
    </div>
  )
}
